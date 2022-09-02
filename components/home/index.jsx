import React from "react";
import HeroSection from "./hero-section";
import MeetAeonSection from "./meet-aeon-section";
import CardsSection from "./card-section";
function Home() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <MeetAeonSection />
      <CardsSection />
    </main>
  );
}

export default Home;
