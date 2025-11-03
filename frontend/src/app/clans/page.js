"use client";
import { useState, useEffect } from "react";

export default function Clans() {
  const [clans, setClans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/clans/")
      .then((res) => res.json())
      .then((data) => setClans(data.clans || []));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-indigo-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">🏆 Clan Leaderboards</h1>
      <ul>
        {clans.length === 0 && <li>No clans yet — be the first to create one!</li>}
        {clans.map((c, i) => (
          <li key={i} className="border-b p-2">
            {i + 1}. {c.name} — {c.points} XP
          </li>
        ))}
      </ul>
    </div>
  );
}
