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
      <span className="text-xl font-semibold text-balance">{title}</span>
      <p className="text-base mt-2 leading-tight">{description}</p>
    </div>
  );
}

function RouteComponent() {
  return (
    <EtheralShadow noise={{ opacity: 1, scale: 1.2 }}>
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

          <div className="relative mx-auto grid max-w-6xl divide-x divide-y border boarder-accent *:p-12 sm:grid-cols-2 lg:grid-cols-3 backdrop-blur-xl rounded-xl overflow-hidden">
            <SolutionsCardCustom
              title="Project / Product Overview"
              description="A concise summary of a project's goals, scope, timeline, and outcomes."
              icon={<IconStack className="size-6" />}
            />
            <SolutionsCardCustom
              title="Business Requirement Document (BRD)"
              description="Documents business needs to guide system or process development."
              icon={<IconBusinessplan className="size-6" />}
            />
            <SolutionsCardCustom
              title="Product Requirement Document (PRD)"
              description="Defines product purpose, features, and user needs for development."
              icon={<IconBlocks className="size-6" />}
            />
            <SolutionsCardCustom
              title="Functional Requirement Document (FRD)"
              description="Outlines system behaviors, features, and interactions."
              icon={<IconFunction className="size-6" />}
            />
            <SolutionsCardCustom
              title="Software Requirement Specification (SRS)"
              description="Defines clear, verifiable system requirements."
              icon={<IconAppWindow className="size-6" />}
            />
            <SolutionsCardCustom
              title="Web Application Development"
              description="Builds responsive, user-friendly websites for your needs."
              icon={<IconWebhook className="size-6" />}
            />
          </div>
        </div>
      </div>
    </EtheralShadow>
  );
}
