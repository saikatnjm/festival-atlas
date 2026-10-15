import type { Metadata } from "next";
import ConfirmSubmit from "@/components/admin/ConfirmSubmit";
import { adminConfigured, adminDbConfigured, countRows, isAdmin, listFeedback, listPlaces, recentNicknames, type FeedbackEntry, type NickRow, type PlaceRow } from "@/lib/admin";
import type { Lang } from "@/lib/i18n";
import { langOf } from "@/lib/route";

// Owner-only page: reads cookies on every request and is never indexed.
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false, nocache: true } };

const ERRORS: Record<string, string> = {
  login: "Wrong username or password.",
  session: "Your session expired; log in again.",
  input: "That didn't look right; nothing was changed.",
  action: "Unknown action.",
  db: "The database refused that. Check SUPABASE_SERVICE_ROLE_KEY and the schema.",
};

const when = (iso: string) => new Date(iso).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="crowd">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

function Login({ lang, error }: { lang: Lang; error: string }) {
  return (
    <>
      <h1>Admin</h1>
      <p className="lead">Owner login. Nothing here is public.</p>
      <form className="feedback-form" method="post" action="/api/admin">
        <input type="hidden" name="action" value="login" />
        <input type="hidden" name="lang" value={lang} />
        <label className="field">
          <span>Username</span>
          <input type="text" name="user" autoComplete="username" required />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" name="pass" autoComplete="current-password" required />
        </label>
        <p className="cta-row">
          <button type="submit" className="button">
            Log in
          </button>
        </p>
        {error ? (
          <p className="fineprint" role="alert">
            {ERRORS[error] ?? "Something went wrong."}
          </p>
        ) : null}
      </form>
    </>
  );
}

function Bar({ lang, error, done }: { lang: Lang; error: string; done: boolean }) {
  return (
    <>
      <div className="cta-row admin-bar">
        <span>
          <b>Admin</b> · logged in
        </span>
        <form method="post" action="/api/admin">
          <input type="hidden" name="action" value="logout" />
          <input type="hidden" name="lang" value={lang} />
          <button type="submit" className="chip">
            Log out
          </button>
        </form>
      </div>
      {error ? (
        <p className="fineprint" role="alert">
          {ERRORS[error] ?? "Something went wrong."}
        </p>
      ) : null}
      {done ? (
        <p className="fineprint" role="status">
          Done.
        </p>
      ) : null}
    </>
  );
}

async function load() {
  const dayAgo = encodeURIComponent(new Date(Date.now() - 86_400_000).toISOString());
  const [feedback, feedbackN, signals24, plays, timings, nicks, pendingPlaces, approvedPlaces] = await Promise.all([
    listFeedback(),
    countRows("feedback"),
    countRows("signals", `created_at=gte.${dayAgo}`),
    countRows("plays"),
    countRows("timings"),
    recentNicknames(),
    listPlaces("pending"),
    countRows("places", "status=eq.approved"),
  ]);
  return { feedback, feedbackN, signals24, plays, timings, nicks, pendingPlaces, approvedPlaces };
}

function PlaceActions({ id, lang }: { id: number; lang: Lang }) {
  return (
    <div className="cta-row">
      <form method="post" action="/api/admin">
        <input type="hidden" name="action" value="approve_place" />
        <input type="hidden" name="lang" value={lang} />
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="chip">
          Approve
        </button>
      </form>
      <form method="post" action="/api/admin">
        <input type="hidden" name="action" value="reject_place" />
        <input type="hidden" name="lang" value={lang} />
        <input type="hidden" name="id" value={id} />
        <ConfirmSubmit className="chip" message="Reject this place?">
          Reject
        </ConfirmSubmit>
      </form>
    </div>
  );
}

/** Feedback inbox, moderation of leaderboard nicknames and a little housekeeping. */
export default async function AdminPage({ params, searchParams }: { params: Promise<{ lang: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const lang = langOf((await params).lang);
  const sp = await searchParams;
  const error = typeof sp.error === "string" ? sp.error : "";
  const done = sp.done === "1";

  if (!adminConfigured()) {
    return (
      <Note title="Admin is not set up">
        Set <code>ADMIN_USER</code> and <code>ADMIN_PASSWORD</code> (10+ characters) in Vercel → Settings → Environment Variables, then redeploy.
      </Note>
    );
  }
  if (!(await isAdmin())) return <Login lang={lang} error={error} />;
  if (!adminDbConfigured()) {
    return (
      <>
        <Bar lang={lang} error={error} done={done} />
        <Note title="Database access is not set up">
          Add <code>SUPABASE_SERVICE_ROLE_KEY</code> (Supabase → Project Settings → API keys → service_role / secret key) as a server-only variable in Vercel (no NEXT_PUBLIC_ prefix), then redeploy.
        </Note>
      </>
    );
  }

  let d: Awaited<ReturnType<typeof load>>;
  try {
    d = await load();
  } catch (e) {
    return (
      <>
        <Bar lang={lang} error={error} done={done} />
        <Note title="Could not read the database">
          {e instanceof Error ? e.message : "Unknown error"}. A 404 means a table is missing: run the whole of supabase/schema.sql in Supabase → SQL Editor (it creates
          the feedback and places tables). A 401/403 means SUPABASE_SERVICE_ROLE_KEY is wrong or missing in Vercel.
        </Note>
      </>
    );
  }

  return (
    <>
      <Bar lang={lang} error={error} done={done} />
      <h1>Dashboard</h1>
      <ul className="admin-stats">
        <li>
          <b>{d.feedbackN}</b> feedback
        </li>
        <li>
          <b>{d.signals24}</b> live reports, last 24 h
        </li>
        <li>
          <b>{d.plays}</b> plays recorded
        </li>
        <li>
          <b>{d.timings}</b> anjali/bhog timings
        </li>
        <li>
          <b>{d.approvedPlaces}</b> community places live · <b>{d.pendingPlaces.length}</b> waiting
        </li>
      </ul>

      <section aria-labelledby="pl-h">
        <h2 id="pl-h">Places waiting for approval ({d.pendingPlaces.length})</h2>
        <p className="fineprint">Open the map link to check the pin sits where the name says. Approved places appear on the public map within a few minutes.</p>
        {d.pendingPlaces.length === 0 ? <p className="fineprint">Nothing waiting.</p> : null}
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>When (IST)</th>
                <th>Name</th>
                <th>Where</th>
                <th>Pin</th>
                <th>Note</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {d.pendingPlaces.map((p: PlaceRow) => (
                <tr key={p.id}>
                  <td>{when(p.created_at)}</td>
                  <td>{p.name}</td>
                  <td>
                    {[p.area, p.city, p.country].filter(Boolean).join(", ")} <span className="fineprint">{p.lang}</span>
                  </td>
                  <td>
                    <a href={`https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lng}#map=17/${p.lat}/${p.lng}`} rel="noopener noreferrer" target="_blank">
                      {p.lat.toFixed(4)}, {p.lng.toFixed(4)}
                    </a>
                  </td>
                  <td className="admin-msg">{p.note ?? "—"}</td>
                  <td>
                    <PlaceActions id={p.id} lang={lang} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="fb-h">
        <h2 id="fb-h">Feedback ({d.feedback.length} latest)</h2>
        {d.feedback.length === 0 ? <p className="fineprint">Nothing yet.</p> : null}
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>When (IST)</th>
                <th>Topic</th>
                <th>Contact</th>
                <th>Message</th>
                <th>Page</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {d.feedback.map((f: FeedbackEntry) => (
                <tr key={f.id}>
                  <td>{when(f.created_at)}</td>
                  <td>{f.topic}</td>
                  <td>{f.contact ?? "—"}</td>
                  <td className="admin-msg">{f.message}</td>
                  <td>
                    {f.page ?? "—"} <span className="fineprint">{f.lang}</span>
                  </td>
                  <td>
                    <form method="post" action="/api/admin">
                      <input type="hidden" name="action" value="delete_feedback" />
                      <input type="hidden" name="lang" value={lang} />
                      <input type="hidden" name="id" value={f.id} />
                      <ConfirmSubmit className="chip" message="Delete this feedback?">
                        Delete
                      </ConfirmSubmit>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="nick-h">
        <h2 id="nick-h">Leaderboard nicknames (latest {d.nicks.length})</h2>
        <p className="fineprint">Deleting removes every play row posted under that nickname, so it leaves the leaderboard.</p>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>When (IST)</th>
                <th>Game</th>
                <th>Score</th>
                <th>Nickname</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {d.nicks.map((n: NickRow) => (
                <tr key={n.id}>
                  <td>{when(n.created_at)}</td>
                  <td>{n.game}</td>
                  <td>{n.score}</td>
                  <td>{n.nickname}</td>
                  <td>
                    <form method="post" action="/api/admin">
                      <input type="hidden" name="action" value="delete_nickname" />
                      <input type="hidden" name="lang" value={lang} />
                      <input type="hidden" name="nickname" value={n.nickname} />
                      <ConfirmSubmit className="chip" message={`Remove "${n.nickname}" from the leaderboard?`}>
                        Remove
                      </ConfirmSubmit>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="hk-h">
        <h2 id="hk-h">Housekeeping</h2>
        <form className="cta-row" method="post" action="/api/admin">
          <input type="hidden" name="action" value="purge_signals" />
          <input type="hidden" name="lang" value={lang} />
          <label className="field">
            <span>Delete live reports older than (days)</span>
            <input type="number" name="days" min={1} max={365} defaultValue={3} />
          </label>
          <ConfirmSubmit message="Delete old live reports?">Purge</ConfirmSubmit>
        </form>
      </section>
    </>
  );
}
