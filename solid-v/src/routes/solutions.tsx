import {
  IconAppWindow,
  IconBlocks,
  IconBusinessplan,
  IconFunction,
  IconStack,
  IconWebhook,
} from "@tabler/icons-solidjs";
import { createFileRoute } from "@tanstack/solid-router";
import type { JSX } from "solid-js";

export const Route = createFileRoute("/solutions")({
  component: RouteComponent,
});

function SolutionsCardCustom({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <div class="space-y-3 text-center bg-secondary/30">
      <div class="relative mx-auto flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border items-center justify-center mb-4">
        {icon}
      </div>
      <h3 class="text-xl">{title}</h3>
      <p class="text-base mt-2 leading-tight">{description}</p>
    </div>
  );
}

function RouteComponent() {
  return (
    <section class="py-12 md:py-20 mt-10 max-sm:mt-20">
      <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 class="capitalize leading-relaxed tracking-wider text-center">
          The Smart Solutions Docufy Tech Offers
        </h2>

        <div class="relative mx-auto grid max-w-6xl *:p-12 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-xl overflow-hidden gap-2">
          <SolutionsCardCustom
            title="Project / Product Overview"
            description="A concise summary of a project's goals, scope, timeline, and outcomes."
            icon={<IconStack class="size-6" />}
          />
          <SolutionsCardCustom
            title="Business Requirement Document (BRD)"
            description="Documents business needs to guide system or process development."
            icon={<IconBusinessplan class="size-6" />}
          />
          <SolutionsCardCustom
            title="Product Requirement Document (PRD)"
            description="Defines product purpose, features, and user needs for development."
            icon={<IconBlocks class="size-6" />}
          />
          <SolutionsCardCustom
            title="Functional Requirement Document (FRD)"
            description="Outlines system behaviors, features, and interactions."
            icon={<IconFunction class="size-6" />}
          />
          <SolutionsCardCustom
            title="Software Requirement Specification (SRS)"
            description="Defines clear, verifiable system requirements."
            icon={<IconAppWindow class="size-6" />}
          />
          <SolutionsCardCustom
            title="Web Application Development"
            description="Builds responsive, user-friendly websites for your needs."
            icon={<IconWebhook class="size-6" />}
          />
        </div>
      </div>
    </section>
  );
}
