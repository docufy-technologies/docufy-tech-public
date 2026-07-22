import AnimatedButton from "@/components/ui/animated-button";
import { BracketContainer } from "@/components/ui/bracket-container";
import { Button } from "@/components/ui/button";
import { EtheralShadow } from "@/components/ui/etheral-shadow";

export default function HeroSection() {
  return (
    <section id="hero-section" class="h-screen w-full">
      <EtheralShadow
        maskImageURL="/mask-1.png"
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
      >
        <div class="flex flex-col max-w-4xl p-6 w-full mx-auto h-full justify-center items-center gap-12 max-sm:gap-8 text-center">
          <img
            src="/logo512.png"
            alt="docufy tech logo"
            class="mx-auto w-48 md:w-72"
          />
          <BracketContainer>
            <h1 class="uppercase lg:text-5xl max-sm:text-2xl">
              Build without limits
            </h1>
            <p class="text-sm md:text-xl font-extralight">
              We build{" "}
              <span class="font-extrabold">
                enterprise-grade, high-performance
              </span>{" "}
              systems with seamless{" "}
              <span class="font-extrabold">AI/ML integration</span>, ensuring
              robust{" "}
              <span class="font-extrabold">
                data, cyber, and digital security
              </span>{" "}
              that results into{" "}
              <span class="font-extrabold">
                accelerating your business growth
              </span>
              .
            </p>
          </BracketContainer>

          <div class="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-4 w-full max-w-sm justify-center items-center">
            <AnimatedButton size="lg" variant="accent" class="w-full">
              <a
                href="https://calendly.com/docufy-bd/30min"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full h-full flex justify-center items-center"
              >
                Book A Call Now
              </a>
            </AnimatedButton>
            <Button variant={"outline"} size={"lg"} class="w-full">
              <a
                href="mailto:info@tech.docufybd.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full h-full flex justify-center items-center"
              >
                Contact Team
              </a>
            </Button>
          </div>
        </div>
      </EtheralShadow>
    </section>
  );
}
