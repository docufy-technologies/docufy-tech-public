import { IconPlus as PlusIcon } from "@tabler/icons-solidjs";
import type { JSX } from "solid-js";

export function BracketContainer({ children }: { children: JSX.Element }) {
  return (
    <div class="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
      <PlusIcon
        class="absolute left-[-11.5px] top-[-12.5px] z-1 size-6"
        stroke-width={1}
      />
      <PlusIcon
        class="absolute right-[-11.5px] top-[-12.5px] z-1 size-6"
        stroke-width={1}
      />
      <PlusIcon
        class="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
        stroke-width={1}
      />
      <PlusIcon
        class="absolute bottom-[-12.5px] right-[-11.5px] z-1 size-6"
        stroke-width={1}
      />
      <div class="pointer-events-none absolute -inset-y-6 left-0 w-px border-l" />
      <div class="pointer-events-none absolute -inset-y-6 right-0 w-px border-r" />
      {children}
    </div>
  );
}
