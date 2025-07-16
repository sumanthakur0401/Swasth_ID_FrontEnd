"use client";

import { useRouter } from "next/navigation";
import { useState } from "react"; 
import LoadingScreen from "../common/LoadingScreen";

export default function LoginForm() {
  const [email, setEmail] = useState("arjun.kumar@example.com");
  const [password, setPassword] = useState("securePwd123!");
  const [loading, setLoading] = useState(false); // ✅ loading state
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // ✅ show loading

    const response = await fetch("http://localhost:8081/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: email,
        password: password,
      }),
      credentials: "include",
    });

    if (response.ok) {
      // Simulate a 2 second delay for UI polish
      setTimeout(() => {
        router.push("/pages/user-home");
      }, 3000);
    } else {
      setLoading(false);
      alert("Invalid credentials");
    }
  };

  if (loading) return <LoadingScreen />; // ✅ conditionally show loading

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-cyan-100 via-blue-50 to-indigo-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg max-w-md w-full p-8 text-gray-900 flex flex-col gap-6"
      >
        {/* your form inputs here... */}
        <h2 className="text-3xl font-semibold text-center text-indigo-900 drop-shadow-md">
          Welcome Back
        </h2>
        <p className="text-center text-indigo-700 font-medium mb-4">
          Sign in to your <span className="font-bold">Swasth ID</span> account
        </p>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 rounded-lg bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-indigo-700 text-indigo-900 shadow-sm transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-3 rounded-lg bg-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-indigo-700 text-indigo-900 shadow-sm transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:brightness-110 transition"
        >
          Login
        </button>
        <p className="text-center text-indigo-800 text-sm">
          Don't have an account?{" "}
          <a
            href="/pages/auth/signup"
            className="font-semibold underline hover:text-cyan-700"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
