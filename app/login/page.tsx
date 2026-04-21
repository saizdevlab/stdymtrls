"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-xl border bg-white p-6 shadow-sm"
      >
        <h1 className="text-lg font-semibold">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="mt-4 w-full rounded-md border px-3 py-2 text-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-3 w-full rounded-md border px-3 py-2 text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="mt-2 text-xs text-red-500">{error}</p>
        )}

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-slate-900 py-2 text-sm text-white"
        >
          Login
        </button>
      </form>
    </main>
  );
}