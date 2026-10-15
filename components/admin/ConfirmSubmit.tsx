"use client";

/** Submit button that asks before a destructive form post (works as a plain submit without JS). */
export default function ConfirmSubmit({ message, children, className = "button button-light" }: { message: string; children: React.ReactNode; className?: string }) {
  return (
    <button type="submit" className={className} onClick={(e) => (window.confirm(message) ? undefined : e.preventDefault())}>
      {children}
    </button>
  );
}
