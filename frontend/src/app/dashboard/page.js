"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const loadHabits = async () => {
    const { data: user } = await supabase.auth.getUser();
    const { data } = await supabase.from("habits").select("*").eq("user_id", user.user.id);
    setHabits(data);
  };

  const addHabit = async () => {
    const { data: user } = await supabase.auth.getUser();
    await supabase.from("habits").insert([{ user_id: user.user.id, name: newHabit }]);
    setNewHabit("");
    loadHabits();
  };

  useEffect(() => {
    loadHabits();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-indigo-50">
      <h1 className="text-3xl font-bold mb-4">Your Habits</h1>
      <div className="flex mb-4">
        <input
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="border p-2 rounded-l w-64"
          placeholder="New habit..."
        />
        <button
          onClick={addHabit}
          className="bg-indigo-600 text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>
      <ul>
        {habits?.map((h) => (
          <li key={h.id} className="p-2 border-b">
            {h.name} — {h.streak}🔥
          </li>
        ))}
      </ul>
    </div>
  );
}
