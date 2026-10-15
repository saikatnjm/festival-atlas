import { NextResponse } from "next/server";
import { ADMIN_COOKIE, SESSION_TTL_MS, adminConfigured, adminEnv, checkCredentials, deleteFeedback, deleteNickname, isAdmin, makeSession, purgeSignals, setPlaceStatus } from "@/lib/admin";

export const dynamic = "force-dynamic";

/** Plain HTML forms post here (no JavaScript needed); every answer is a redirect back to /admin. */
function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // the session cookie is SameSite=Lax, so a cross-site POST carries no session anyway
  try {
    return new URL(origin).host === (req.headers.get("x-forwarded-host") ?? req.headers.get("host"));
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!adminConfigured()) return NextResponse.json({ ok: false, error: "admin not configured" }, { status: 503 });
  if (!sameOrigin(req)) return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  const form = await req.formData().catch(() => null);
  const get = (k: string) => {
    const v = form?.get(k);
    return typeof v === "string" ? v : "";
  };
  const lang = get("lang") === "bn" ? "bn" : "en";
  const back = (q = "") => NextResponse.redirect(new URL(`/${lang}/admin${q}`, req.url), 303);
  const env = adminEnv();
  const action = get("action");

  if (action === "login") {
    if (!checkCredentials(get("user"), get("pass"), env.user, env.pass)) {
      await new Promise((r) => setTimeout(r, 800)); // slows down guessing
      return back("?error=login");
    }
    const res = back();
    res.cookies.set(ADMIN_COOKIE, await makeSession(env.secret), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_TTL_MS / 1000,
    });
    return res;
  }

  if (!(await isAdmin())) return back("?error=session");
  if (action === "logout") {
    const res = back();
    res.cookies.delete(ADMIN_COOKIE);
    return res;
  }
  try {
    if (action === "delete_feedback") {
      const id = Number(get("id"));
      if (!Number.isInteger(id) || id <= 0) return back("?error=input");
      await deleteFeedback(id);
    } else if (action === "delete_nickname") {
      const nickname = get("nickname").trim();
      if (!nickname || nickname.length > 24) return back("?error=input");
      await deleteNickname(nickname);
    } else if (action === "purge_signals") {
      const days = Number(get("days"));
      await purgeSignals(Number.isFinite(days) && days >= 1 ? Math.floor(days) : 3);
    } else if (action === "approve_place" || action === "reject_place") {
      const id = Number(get("id"));
      if (!Number.isInteger(id) || id <= 0) return back("?error=input");
      await setPlaceStatus(id, action === "approve_place" ? "approved" : "rejected");
    } else {
      return back("?error=action");
    }
    return back("?done=1");
  } catch {
    return back("?error=db");
  }
}
