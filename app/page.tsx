import { About, ContactPage, Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <ContactPage />
    </main>
  );
}
