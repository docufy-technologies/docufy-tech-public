import { cn } from "@/lib/utils";
import { IconQuote, IconQuoteOpen } from "@tabler/icons-react";
import type { ClassNameValue } from "tailwind-merge";

export function Quoted({
  text,
  className,
}: {
  text: string;
  className?: ClassNameValue;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-3xl w-[90%] flex-col justify-between gap-y-6 px-4 py-1 sm:py-8 text-center font-regular text-lg sm:text-4xl",
        className,
      )}
    >
      <IconQuoteOpen
        className="absolute sm:top-[-12.5px] -top-3 sm:left-[-11.5px] -left-2 z-1 size-6 text-accent fill-accent"
        strokeWidth={1}
      />
      <IconQuote
        className="absolute sm:right-[-11.5px] -right-2 sm:bottom-[-12.5px] -bottom-3 z-1 size-6 text-accent fill-accent"
        strokeWidth={1}
      />
      {text}
    </div>
  );
}
