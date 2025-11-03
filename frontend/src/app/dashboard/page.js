"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [quote, setQuote] = useState("Loading your daily motivation...");

  useEffect(() => {
    fetch("http://localhost:8000/ai/quote/Vignesh")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch(() => setQuote("Keep pushing forward — every step counts!"));
  }, []);

  return (
    <div className="min-h-screen bg-indigo-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Your Dashboard</h1>
      <div className="bg-white p-4 rounded shadow mb-6">
        <p className="italic">"{quote}"</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-purple-100 p-4 rounded shadow">📖 Read Book — 5🔥</div>
        <div className="bg-purple-100 p-4 rounded shadow">💧 Drink Water — 3🔥</div>
        <div className="bg-purple-100 p-4 rounded shadow">🏋️ Workout — 7🔥</div>
      </div>
    </div>
  );
}
