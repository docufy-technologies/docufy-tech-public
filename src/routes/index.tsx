import { createFileRoute } from "@tanstack/react-router";
import { useTheme } from "@/components/provider/theme-provider";
import AnimatedButton from "@/components/ui/animated-button";
import { BracketContainer } from "@/components/ui/bracket-container";
import { Button } from "@/components/ui/button";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { Sparkles } from "@/components/ui/sparkles";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { theme } = useTheme();
  return (
    <div className="max-w-screen">
      <section id="hero" className="h-screen w-full overflow-x-clip">
        <EtheralShadow
          maskImageURL="/mask-1.png"
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
          color="var(--secondary)"
          opacity={0.75}
        >
          <div className="flex flex-col max-w-4xl p-6 w-full mx-auto h-full justify-center items-center gap-12 max-sm:gap-8 text-center">
            <img
              src="/logo512.png"
              alt="docufy tech logo"
              className="mx-auto w-48 md:w-72"
            />
            <BracketContainer>
              <h1 className="uppercase lg:text-5xl max-sm:text-2xl">
                Build without limits
              </h1>
              <p className="text-sm md:text-xl font-extralight">
                We build{" "}
                <span className="font-extrabold">
                  enterprise-grade, high-performance
                </span>{" "}
                systems with seamless{" "}
                <span className="font-extrabold">AI/ML integration</span>,
                ensuring robust{" "}
                <span className="font-extrabold">
                  data, cyber, and digital security
                </span>{" "}
                that results into{" "}
                <span className="font-extrabold">
                  accelerating your business growth
                </span>
                .
              </p>
            </BracketContainer>

            <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-4 max-sm:gap-2 w-full max-w-sm justify-center items-center">
              <AnimatedButton size="lg" className="w-full">
                <a
                  href="https://calendly.com/docufytechnologies/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  Book A Call Now
                </a>
              </AnimatedButton>
              <Button variant={"outline"} size={"lg"} className="w-full">
                Contact Team
              </Button>
            </div>
          </div>
        </EtheralShadow>
      </section>
      <section className="h-fit w-full overflow-x-clip overflow-y-hidden">
        <div className="mx-auto w-full max-w-2xl">
          <div className="text-center text-3xl text-foreground">
            <h1 className="text-secondary lg:text-5xl text-xl font-normal capitalize">
              Our Partners And Patrons
            </h1>
          </div>

          <div className="mt-14 mx-auto w-fit">
            <img src="/nnologo.png" alt="NNO Logo" className="h-12 w-auto" />
          </div>
        </div>

        <div className="relative -mt-32 h-96 w-full overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--accent),transparent_60%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t bg-background/80" />
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
            color={theme === "dark" ? "#ffffff" : "#000000"}
          />
        </div>
      </section>
    </div>
  );
}
