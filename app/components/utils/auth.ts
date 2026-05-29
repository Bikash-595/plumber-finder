"use client";

export type AppUser = {
  name: string;
  email: string;
  avatarUrl?: string;
  accountType?: "seeker" | "company" | "freelancer";
};

export const AUTH_STORAGE_KEY = "plumberfinder_user";

export function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function readStoredUser(): AppUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AppUser) : null;
  } catch {
    return null;
  }
}

export function storeUser(user: AppUser) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}
