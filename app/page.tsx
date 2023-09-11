import { About, ContactPage, Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden font-cinzel font-semibold">
      <Hero />
      <About />
      <ContactPage />
    </main>
  );
}
