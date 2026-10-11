// Tiny sessionStorage helpers. Used so a game survives switching language (a full page load).
// Everything is wrapped: storage can be unavailable (private mode, blocked cookies) and the app works without it.

export function loadState<T>(key: string, validate: (v: unknown) => T | null): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? validate(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

export function saveState(key: string, value: unknown): void {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable: nothing to do.
  }
}

export function clearState(key: string): void {
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    // ignore
  }
}

export const isIntArray = (v: unknown, max: number, len: number): v is number[] =>
  Array.isArray(v) && v.length <= len && v.every((n) => Number.isInteger(n) && n >= 0 && n < max);
