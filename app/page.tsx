import { ContactForm, ContactPage, Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ContactPage landing={true} />
    </main>
  );
}
