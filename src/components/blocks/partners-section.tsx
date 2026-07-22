import { Sparkles } from "@/components/ui/sparkles";

export default function PartnersSection() {
  return (
    <section
      id="partners-section"
      class="h-fit w-full overflow-x-clip overflow-y-hidden mt-20"
    >
      <div class="mx-auto w-full max-w-2xl z-12">
        <div class="text-center text-3xl text-foreground">
          <h1 class="lg:text-4xl text-xl uppercase mb-4">
            Our Partners & Patrons
          </h1>
        </div>
        <div
          class="mt-14 mx-auto w-fit flex gap-x-6 md:gap-x-12 gap-y-2 justify-center items-center pb-10"
          id="partners-logo"
        >
          <img
            src="/docufy-logo.png"
            alt="Docufy Logo"
            class="h-8 md:h-10 w-auto"
          />
          <img
            src="/diesel-power.png"
            alt="Diesel Power Logo"
            class="h-8 md:h-10 w-auto"
          />
        </div>
      </div>
      <div class="relative -mt-32 h-64 w-full overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)]">
        <div class="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--secondary),transparent_70%)] before:opacity-40" />
        <div class="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-5 w-[200%] rounded-[100%] border-t border-secondary bg-background" />
        <Sparkles
          density={1200}
          class="absolute inset-x-0 bottom-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  );
}
