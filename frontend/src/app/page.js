import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
      <h1 className="text-5xl font-bold mb-4">🏆 ReHabit</h1>
      <p className="text-xl max-w-lg mb-8">Build habits, join clans, and conquer your goals with friends.</p>
      <Link href="/dashboard" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Go to Dashboard
      </Link>
    </main>
  );
}
