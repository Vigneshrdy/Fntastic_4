"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const register = async () => {
    await fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        username,
        email,
        xp: 0
      }),
    });
    alert("Welcome to ReHabit!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Join ReHabit</h1>
      <input
        className="border rounded p-2 mb-3 w-64"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border rounded p-2 mb-3 w-64"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={register} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
        Register
      </button>
    </div>
  );
}
