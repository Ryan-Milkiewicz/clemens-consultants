import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans">
      <Hero />
      <Services />
    </main>
  );
}
