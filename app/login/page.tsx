// app/login/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { storeUser } from "../components/utils/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) || "User";
    storeUser({
      name,
      email,
      avatarUrl: `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`,
      accountType: "seeker",
    });
    router.push("/");
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white font-sans">
      {/* Light liquid glass background (subtle #FFD60A glow) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD60A]/5 via-transparent to-[#FFD60A]/5" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#FFD60A]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#FFD60A]/5 blur-[120px]" />
      </div>

      <div className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-md transform transition-all duration-500 animate-in fade-in zoom-in-95">
          <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-xl p-6 sm:p-8">
            {/* Header */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD60A]/10 text-3xl">
                🔧
              </div>
              <h1
                className="text-3xl font-extrabold tracking-tight text-gray-900"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Welcome Back
              </h1>
              <p className="mt-2 text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-[#FFD60A] hover:underline transition"
                >
                  Sign up free →
                </Link>
              </p>
            </div>

            {/* Google OAuth */}
            <button
              type="button"
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-[#FFD60A] hover:bg-[#FFD60A]/5 hover:shadow-md"
            >
              <FcGoogle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs font-medium uppercase tracking-wider">
                <span className="bg-white px-3 text-gray-500">
                  OR EMAIL LOGIN
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-600 transition-colors group-focus-within:text-[#FFD60A]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="mt-1 block w-full rounded-full border border-gray-300 bg-white/80 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#FFD60A] focus:ring-1 focus:ring-[#FFD60A] focus:bg-white"
                  required
                />
              </div>

              <div className="group">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-600 transition-colors group-focus-within:text-[#FFD60A]"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#FFD60A] hover:underline transition"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative mt-1">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full rounded-full border border-gray-300 bg-white/80 px-4 py-2.5 pr-10 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-[#FFD60A] focus:ring-1 focus:ring-[#FFD60A] focus:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-[#FFD60A] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-105 hover:shadow-[#FFD60A]/30 active:scale-[0.98]"
              >
                Log In
              </button>
            </form>

            {/* Signup alternative */}
            <div className="mt-6 text-center text-sm text-gray-600">
              New to PlumberFinder?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#FFD60A] hover:underline transition"
              >
                Create Account
              </Link>
            </div>

            {/* Urgent help */}
            <div className="mt-8 flex justify-center">
              <Link
                href="/emergency"
                className="group inline-flex items-center gap-2 rounded-full border border-[#FFD60A]/30 bg-[#FFD60A]/10 px-4 py-2 text-sm font-medium text-[#B1A606] transition-all hover:bg-[#FFD60A]/20 hover:border-[#FFD60A]/50 hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 transition-transform group-hover:scale-110"
                >
                  <path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Need Urgent Help?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
