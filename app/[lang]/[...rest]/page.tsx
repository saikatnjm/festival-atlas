import { notFound } from "next/navigation";

// Any unknown path under /en or /bn renders the localised not-found page.
export const dynamicParams = true;

export default function CatchAll() {
  notFound();
}
