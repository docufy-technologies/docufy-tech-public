import { createFileRoute } from "@tanstack/solid-router";
import PartnersSection from "@/components/blocks/partners-section";
import TechStackSection from "@/components/blocks/tech-stack-section";
import WhyDocufyTechSection from "@/components/blocks/why-docufy-tech-section";
import AnimatedButton from "@/components/ui/animated-button";
import { BracketContainer } from "@/components/ui/bracket-container";
import { Button } from "@/components/ui/button";
import { EtheralShadow } from "@/components/ui/etheral-shadow";

export const Route = createFileRoute("/")({ component: Home });

const requestForQuoteMailContents = {
  subject: encodeURIComponent("Request for Quotation"),
  body: encodeURIComponent(
    `Hi Docufy Tech Team,\n\nI'm reaching out to request a quotation.\n\nService Required:\n(delete the irrelevant options)\n[ ] New Website Build\n[ ] Bug Fix / Troubleshooting\n[ ] Website Migration\n[ ] UI/UX Redesign\n[ ] Performance Optimization\n[ ] Other: _______________\n\nProject Overview:\n(Brief description of what you need)\n\nExisting Assets:\nDo you have any of the following ready?\n[ ] Design files (Figma, Adobe XD, etc.)\n[ ] Brand guidelines / logo\n[ ] Content / copywriting\n[ ] Existing codebase or repository\n\nLinks For Existing Assets:\n(drop the links if applicable)\n\nCurrent Tech Stack (if applicable):\n(e.g., WordPress, React, Solid, etc.)\n\nTimeline:\nExpected start date: _______________\nDeadline (if any): _______________\n\nAdditional Notes:\n[Anything else we should know]\n\nLooking forward to hearing from you.\n[Your Name]\n[Your Company]\n[Your Contact Number]`,
  ),
};

const requestForDemoMailContents = {
  subject: encodeURIComponent("Request for Demo"),
  body: encodeURIComponent(
    `Hi Docufy Tech Team,\n\nI'm reaching out to schedule a demo of your services.\n\nWhat I'd Like to See:\n(delete the irrelevant options)\n[ ] Website Build Process & Workflow\n[ ] UI/UX Design Capabilities\n[ ] Past Projects & Case Studies\n[ ] Performance & Optimization Work\n[ ] Migration Process\n[ ] Other: _______________\n\nAbout My Project:\n(Brief description of your project or business)\n\nAvailability:\nPreferred date(s): _______________\nPreferred time(s): _______________\nTimezone: _______________\n\nAdditional Notes:\n[Anything else we should know]\n\nLooking forward to connecting.\n[Your Name]\n[Your Company]\n[Your Contact Number]`,
  ),
};
function Home() {
  return (
    <div class="max-w-screen">
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
      <WhyDocufyTechSection />
      <TechStackSection />
      <PartnersSection />
      <section
        id="final-CTA-section"
        class="h-fit w-fit max-w-2xl mx-auto mb-20 px-12"
      >
        <p class="text-base text-center mb-4">
          One less thing to worry. Let Docufy Tech handle it for you.
        </p>
        <div class="flex gap-6 justify-center items-center max-sm:flex-col max-w-sm">
          <AnimatedButton variant="accent" class="w-full">
            <a
              href={`mailto:info@tech.docufybd.com?subject=${requestForQuoteMailContents.subject}&body=${requestForQuoteMailContents.body}`}
              target="_blank"
              rel="noopener noreferrer"
              class="w-full h-full flex justify-center items-center"
            >
              Request A Quote
            </a>
          </AnimatedButton>
          <AnimatedButton variant="outline" class="w-full">
            <a
              href={`mailto:info@tech.docufybd.com?subject=${requestForDemoMailContents.subject}&body=${requestForDemoMailContents.body}`}
              target="_blank"
              rel="noopener noreferrer"
              class="w-full h-full flex justify-center items-center"
            >
              Request A Demo
            </a>
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
}
