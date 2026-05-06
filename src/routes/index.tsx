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
        <div className="flex flex-col max-w-4xl p-6 w-full mx-auto h-full justify-center items-center gap-6 text-center">
          <img
            src="/logo512.svg"
            alt="docufy tech logo"
            className="mx-auto w-48"
          />
          <h1 className="uppercase lg:text-5xl max-sm:text-xl">
            Build without limits
          </h1>
          <p className="font-medium text-lg max-sm:text-sm text-balance">
            We build enterprise-grade, high-performance systems with seamless
            AI/ML integration, ensuring robust data, cyber, and digital security
            that results into accelerating your business growth.
          </p>
          <div className="grid grid-cols-2 gap-4 max-sm:gap-2 w-full max-w-sm justify-center items-center mt-4">
            <AnimatedButton size="lg">
              <a
                href="https://calendly.com/docufytechnologies/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book A Call Now
              </a>
            </AnimatedButton>

            <Button variant={"outline"} size={"lg"}>
              Contact Team
            </Button>
          </div>
        </div>
      </EtheralShadow>
    </section>
  );
}
