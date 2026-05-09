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
        "relative mx-auto flex max-w-3xl w-[80%] flex-col justify-between gap-y-6 px-4 py-1 sm:py-8 text-center font-regular text-xl sm:text-4xl",
        className,
      )}
    >
      <IconQuoteOpen
        className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6 text-accent fill-accent"
        strokeWidth={1}
      />
      <IconQuote
        className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6 text-accent fill-accent"
        strokeWidth={1}
      />
      {text}
    </div>
  );
}
