'use client'
import Home from "./home/page";
import '../styles/style.css';

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Home />
    </div>
  );
}
