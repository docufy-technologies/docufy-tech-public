import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { OurPartners } from "@/components/sections/our-partners";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="max-w-screen">
      <Hero />
      <OurPartners />
    </div>
  );
}
