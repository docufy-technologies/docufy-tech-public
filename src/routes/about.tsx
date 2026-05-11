import {
  TeamShowcaseMobile,
  TeamShowcaseDesktop,
} from "@/components/blocks/team-showcase";
import AnimatedButton from "@/components/ui/animated-button";
import { Quoted } from "@/components/ui/quoted";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function getGMT6Time() {
  const now = new Date();
  const gmt6Date = new Date(now.getTime() + 6 * 3600000);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[gmt6Date.getUTCMonth()];
  const day = String(gmt6Date.getUTCDate()).padStart(2, "0");
  const year = gmt6Date.getUTCFullYear();
  const hours = String(gmt6Date.getUTCHours()).padStart(2, "0");
  const minutes = String(gmt6Date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(gmt6Date.getUTCSeconds()).padStart(2, "0");

  return `${month} ${day}, ${year}, ${hours}:${minutes}:${seconds}`;
}

function RouteComponent() {
  return (
    <>
      <section className="h-[50dvh] w-full flex justify-center items-center flex-col gap-4 pt-30">
        <h1 className="text-center tracking-wider">About The Company</h1>
        {/*tagline*/}
        <span className="text-center text-sm sm:text-lg uppercase tracking-widest text-accent">
          docufy tech: build without limits
        </span>
        {/*gmt+6 time*/}
        <span className="text-center text-sm max-sm:w-[75%] tracking-wider font-light">
          You landed on{" "}
          <span className="border-b border-accent font-normal">
            {getGMT6Time()}
          </span>{" "}
          according to our local time!
        </span>
      </section>

      {/*what we do, who we are*/}
      <section className="max-w-3xl sm:py-20 h-fit mx-auto flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span className="uppercase font-bold h-full sm:mt-1 text-center text-accent">
            who we are
          </span>
          <span className="sm:text-xl max-sm:text-center col-span-2 font-light max-sm:px-4">
            Docufy Tech is the technology services subsidiary of{" "}
            <a
              href="https://docufybd.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docufy
            </a>
            . We partner with international businesses seeking a reliable
            technology provider backed by a transparent process, effective
            communication, and a strong commitment to delivering quality
            results.
          </span>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full pt-10">
          <span className="uppercase h-full sm:mt-1 text-center font-bold text-accent">
            what we do
          </span>
          <span className="sm:text-xl max-sm:text-center col-span-2 font-light max-sm:px-4">
            We design and build applications with a research-first mindset.
            Every engagement starts with understanding the problem, defining the
            outcome, and engineering the solution to match. What we promise is
            what we build, and we focus on work that is practical, measurable,
            and built to last.
          </span>
        </div>
      </section>

      {/*team section*/}
      <section className="py-30 flex flex-col gap-12 justify-center items-center">
        <h1 className="text-center text-accent max-sm:text-2xl">
          Meet Our Core Members
        </h1>
        <TeamShowcaseDesktop />
        <TeamShowcaseMobile />
      </section>

      {/*cta*/}
      <section className="pb-30 pt-10 flex flex-col gap-14 justify-center items-center">
        <Quoted
          text="We are committed to delivering high-quality web applications that meet
        your needs."
        />
        <AnimatedButton variant="accent">
          <a
            href="https://calendly.com/docufytechnologies/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center items-center"
          >
            Schedule A Meeting Now
          </a>
        </AnimatedButton>
      </section>
    </>
  );
}
