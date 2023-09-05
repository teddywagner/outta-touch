import { About, ContactForm, ContactPage, Hero, TripCard } from "@/components";
import { trips } from "@/constants";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="bg-img bg-boat card-bg">
        <div className="flex-center md:flex-row flex-col padding-y px-16 h-full backdrop-blur-lg text-white">
          <div className="flex justify-center flex-col">
            <div className="text-3xl font-bold">
              Popular <span className="text-sky-600">Destinations</span>
            </div>
            <span>See some of our upcoming featured destinations.</span>
          </div>
          <div className="flex justify-end md:flex-row flex-col gap-3 flex-1">
            {trips.map((trip) => (
              <TripCard
                key={trip.location}
                location={trip.location}
                duration={trip.duration}
                season={trip.season}
              />
            ))}
          </div>
        </div>
      </div>
      <About />
      <ContactPage />
    </main>
  );
}
