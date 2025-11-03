"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      setUser(data);
    };
    fetchProfile();
  }, []);

  if (!user) return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white flex flex-col items-center py-12">
      <img
        src={user.avatar}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-1">{user.username}</h1>
      <p className="text-indigo-200 text-lg mb-2">Clan: {user.clan || "None"}</p>
      <div className="bg-indigo-700 px-5 py-2 rounded-full mb-4 font-semibold">
        {user.xp} XP
      </div>

      <h2 className="text-xl font-bold mb-4">🏅 Badges</h2>
      <div className="grid grid-cols-2 gap-4 text-center">
        {user.badges.map((b, i) => (
          <div
            key={i}
            className="bg-indigo-900 rounded-xl py-3 shadow-md border border-indigo-500 hover:scale-105 transition"
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}
