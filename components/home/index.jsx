import React from "react";
import HeroSection from "./hero-section";
import MeetAeonSection from "./meet-aeon-section";
import CardsSection from "./card-section";
import RoadMap from "./roadmap";
function Home() {
  return (
    <main className="space-y-24">
      <HeroSection />
      <MeetAeonSection />
      <CardsSection />
      <RoadMap />
    </main>
  );
}

export default Home;
