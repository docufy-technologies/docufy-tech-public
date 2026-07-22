import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandTypescript,
} from "@tabler/icons-solidjs";

export default function TechStackSection() {
  return (
    <section id="tech-stack-section" class="h-fit max-w-screen">
      <div class="flex flex-col justify-center items-center gap-14 py-14 sm:py-24">
        <h1 class="uppercase max-sm:text-2xl">Languages We Use</h1>
        <div class="flex max-lg:flex-col max-lg:gap-2 max-lg:justify-start max-lg:items-start justify-center items-center gap-16 text-center">
          <div class="flex justify-center items-center gap-2">
            <IconBrandHtml5 title="HTML5" class="size-8" />
            <p class="text-xl sm:text-2xl">HTML5</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <IconBrandCss3 title="CSS3" class="size-8" />
            <p class="text-xl sm:text-2xl">CSS3</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <IconBrandJavascript title="JavaScript" class="size-8" />
            <p class="text-xl sm:text-2xl">JavaScript</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <IconBrandTypescript title="TypeScript" class="size-8" />
            <p class="text-xl sm:text-2xl">TypeScript</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <IconBrandPython title="Python" class="size-8" />
            <p class="text-xl sm:text-2xl">Python</p>
          </div>
        </div>
      </div>
    </section>
  );
}
