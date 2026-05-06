import {
  IconAppWindow,
  IconBlocks,
  IconBusinessplan,
  IconFunction,
  IconStack,
  IconWebhook,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { EtheralShadow } from "@/components/ui/etheral-shadow";

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
  icon: React.ReactNode;
}) {
  return (
    <div className="space-y-3 text-center">
      <div className="relative mx-auto flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border items-center justify-center mb-4">
        {icon}
      </div>
      <span className="text-lg font-semibold">{title}</span>
      <p className="text-sm mt-2 leading-tight">{description}</p>
    </div>
  );
}

function RouteComponent() {
  return (
    <EtheralShadow opacity={0.4} maskImageURL="/mask-2.png" sizing="stretch">
      <div className="py-12 md:py-20 mt-10 max-sm:mt-20">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <span className="capitalize font-bold text-center text-xl lg:text-3xl flex max-sm:flex-col justify-center items-center gap-3">
            The Smart Solutions{" "}
            <img
              src="/logo512.png"
              alt="Docufy Tech Logo"
              className="h-4.5 max-sm:h-3"
            />{" "}
            Offers
          </span>

          <div className="relative mx-auto grid max-w-6xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-3xl rounded-xl overflow-hidden">
            <SolutionsCardCustom
              title="Product Overview"
              description="The Project Overview service offers a detailed summary of a project, outlining its objectives, scope, timelines, and expected outcomes to ensure all stakeholders are aligned."
              icon={<IconStack className="size-6" />}
            />
            <SolutionsCardCustom
              title="Business Requirement Document (BRD)"
              description="The Business Requirement Document service formally documents business needs to support controlled system or process development."
              icon={<IconBusinessplan className="size-6" />}
            />
            <SolutionsCardCustom
              title="Product Requirement Document (PRD)"
              description="The PRD service helps businesses define and document the product requirements, detailing the product's purpose, functionality, and user needs to guide its development process."
              icon={<IconBlocks className="size-6" />}
            />
            <SolutionsCardCustom
              title="Functional Requirement Document (FRD)"
              description="The FRD service helps businesses define and document the functional requirements of a system or project, outlining the expected behaviors, features, and interactions."
              icon={<IconFunction className="size-6" />}
            />
            <SolutionsCardCustom
              title="Software Requirement Specification (SRS)"
              description="The SRS service defines detailed and verifiable system requirements derived from approved business needs."
              icon={<IconAppWindow className="size-6" />}
            />
            <SolutionsCardCustom
              title="Web Application Development"
              description="Web Development service helps businesses establish an online presence by creating responsive, functional, and user-friendly websites tailored to specific needs."
              icon={<IconWebhook className="size-6" />}
            />
          </div>
        </div>
      </div>
    </EtheralShadow>
  );
}
