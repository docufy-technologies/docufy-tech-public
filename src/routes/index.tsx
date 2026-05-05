import { createFileRoute } from "@tanstack/react-router";
import AnimatedButton from "@/components/ui/animated-button";
import { Button } from "@/components/ui/button";
import { EtheralShadow } from "@/components/ui/etheral-shadow";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <section className="h-screen w-screen">
      <EtheralShadow
        maskImageURL="/mask-2.png"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
        color="var(--secondary)"
        opacity={0.6}
      >
        <div className="max-w-2xl flex flex-col items-center justify-center h-full mx-auto text-center gap-6">
          <img
            src="/logo512.svg"
            alt="docufy tech logo"
            className="mx-auto w-48 mb-4"
          />
          <h1 className="uppercase tracking-wider">Build without limits</h1>
          <p className="font-medium text-lg">
            We build enterprise-grade, high-performance systems with seamless
            AI/ML integration, ensuring robust data, cyber, and digital security
            that results into accelerating your business growth.
          </p>
          <div className="flex gap-4 justify-center items-center mx-auto mt-4">
            <a
              href="https://calendly.com/docufytechnologies/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <AnimatedButton size={"lg"}>Book A Call Now</AnimatedButton>
            </a>
            <Button variant={"outline"} size={"lg"}>
              Contact Team
            </Button>
          </div>
        </div>
      </EtheralShadow>
    </section>
  );
}
