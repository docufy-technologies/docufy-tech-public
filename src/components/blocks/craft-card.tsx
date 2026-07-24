import { createSignal, For, onCleanup, onMount, type JSX } from "solid-js";
import { IconPointer2 } from "@tabler/icons-solidjs";
import { cn } from "@/lib/utils";

type CardItem = {
  title: string;
  description: string;
  skeleton: JSX.Element;
  className?: string;
  config: {
    y: number;
    x?: number;
    rotate: number;
    zIndex: number;
  };
};

export interface CraftCardsProps {
  springDuration?: number;
  activeScale?: number;
  cardSpacing?: number;
  cards?: CardItem[];
  class?: string;
}

const defaultCards: CardItem[] = [
  {
    title: "AI Agent Configuration",
    description:
      "Most teams waste days wrestling with defaults that were never tuned for their stack. We configure OpenCode, Claude Code, Codex, and Gemini CLI to work the way your codebase actually runs, so you ship with agents that earn their keep from day one.",
    skeleton: (
      <div
        class="h-50 w-full rounded-xl"
        style={{
          background:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 14px, oklch(0.6 0.15 175 / 0.15) 14px, oklch(0.6 0.15 175 / 0.15) 15px), linear-gradient(180deg, oklch(0.06 0 0) 0%, oklch(0.04 0 0) 100%)",
        }}
      >
        <div
          class="ml-4 mt-4 h-3 w-1/3 rounded-full"
          style={{ background: "oklch(0.6 0.15 175 / 0.4)" }}
        />
        <div
          class="ml-4 mt-3 h-3 w-1/2 rounded-full"
          style={{ background: "oklch(0.6 0.15 175 / 0.25)" }}
        />
        <div
          class="ml-4 mt-3 h-3 w-2/5 rounded-full"
          style={{ background: "oklch(0.6 0.15 175 / 0.35)" }}
        />
        <div
          class="ml-4 mt-3 h-3 w-1/4 rounded-full"
          style={{ background: "oklch(0.6 0.15 175 / 0.2)" }}
        />
      </div>
    ),
    className: "bg-card border-border/50",
    config: { y: -20, rotate: -15, zIndex: 2 },
  },
  {
    title: "Custom AI Instructions",
    description:
      "Generic prompts produce generic output. We build instruction sets that give your AI context on your team's patterns, conventions, and standards, so it stops guessing and starts operating like a team member who actually read the docs.",
    skeleton: (
      <div
        class="h-50 w-full rounded-xl"
        style={{
          background:
            "repeating-linear-gradient(180deg, transparent 0px, transparent 18px, oklch(0.85 0.01 80 / 0.06) 18px, oklch(0.85 0.01 80 / 0.06) 19px), linear-gradient(180deg, oklch(0.08 0 0) 0%, oklch(0.06 0 0) 100%)",
        }}
      >
        <div class="mx-4 mt-4 flex items-center gap-2">
          <div
            class="h-3 w-3 rounded-sm"
            style={{ background: "oklch(0.6 0.18 70 / 0.6)" }}
          />
          <div
            class="h-3 w-1/3 rounded-full"
            style={{ background: "oklch(0.97 0.01 80 / 0.15)" }}
          />
        </div>
        <div class="mx-4 mt-3 flex items-center gap-2">
          <div
            class="h-3 w-3 rounded-sm"
            style={{ background: "oklch(0.6 0.15 175 / 0.5)" }}
          />
          <div
            class="h-3 w-1/2 rounded-full"
            style={{ background: "oklch(0.97 0.01 80 / 0.1)" }}
          />
        </div>
        <div
          class="mx-4 mt-3 h-8 w-3/4 rounded-lg"
          style={{ background: "oklch(0.6 0.18 70 / 0.12)" }}
        />
        <div class="mx-4 mt-3 flex items-center gap-2">
          <div
            class="h-3 w-3 rounded-sm"
            style={{ background: "oklch(0.6 0.15 175 / 0.4)" }}
          />
          <div
            class="h-3 w-2/5 rounded-full"
            style={{ background: "oklch(0.97 0.01 80 / 0.08)" }}
          />
        </div>
      </div>
    ),
    className: "bg-card border-border/50",
    config: { y: 20, rotate: 8, zIndex: 3 },
  },
  {
    title: "AI Based Automations",
    description:
      "Every hour your team spends on handoffs, status checks, and data reshuffling is an hour not spent on work that actually matters. We wire n8n, Make, or custom integrations so the repetitive layer runs without you.",
    skeleton: (
      <div
        class="relative h-50 w-full overflow-hidden rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.06 0 0) 0%, oklch(0.04 0 0) 100%)",
        }}
      >
        <svg
          viewBox="0 0 300 200"
          class="absolute inset-0 h-full w-full"
          style={{ opacity: 0.5 }}
          aria-hidden="true"
        >
          <line
            x1="60"
            y1="60"
            x2="150"
            y2="100"
            stroke="oklch(0.6 0.18 70 / 0.4)"
            stroke-width="1.5"
          />
          <line
            x1="150"
            y1="100"
            x2="240"
            y2="60"
            stroke="oklch(0.6 0.18 70 / 0.4)"
            stroke-width="1.5"
          />
          <line
            x1="150"
            y1="100"
            x2="150"
            y2="160"
            stroke="oklch(0.6 0.15 175 / 0.3)"
            stroke-width="1.5"
          />
          <line
            x1="150"
            y1="100"
            x2="80"
            y2="150"
            stroke="oklch(0.6 0.15 175 / 0.3)"
            stroke-width="1.5"
          />
          <circle cx="60" cy="60" r="8" fill="oklch(0.6 0.18 70 / 0.6)" />
          <circle cx="150" cy="100" r="10" fill="oklch(0.6 0.18 70 / 0.8)" />
          <circle cx="240" cy="60" r="8" fill="oklch(0.6 0.18 70 / 0.6)" />
          <circle cx="150" cy="160" r="6" fill="oklch(0.6 0.15 175 / 0.5)" />
          <circle cx="80" cy="150" r="6" fill="oklch(0.6 0.15 175 / 0.5)" />
        </svg>
      </div>
    ),
    className: "bg-card border-border/50",
    config: { y: -80, rotate: -5, zIndex: 4 },
  },
];

export function CraftCards(props: CraftCardsProps) {
  const cards = props.cards ?? defaultCards;
  const springDuration = props.springDuration ?? 600;
  const activeScale = props.activeScale ?? 1.15;
  const cardSpacing = props.cardSpacing ?? 260;

  const [active, setActive] = createSignal<CardItem | null>(null);
  const [spacing, setSpacing] = createSignal(cardSpacing);
  let containerRef: HTMLDivElement | undefined;

  const middle = (cards.length - 1) / 2;

  const isAnyCardActive = () => active() !== null;
  const isCurrentActive = (card: CardItem) => active()?.title === card.title;

  const handleCardClick = (card: CardItem, e: MouseEvent) => {
    e.stopPropagation();
    setActive(isCurrentActive(card) ? null : card);
  };

  const handleContainerClick = () => {
    setActive(null);
  };

  const handleContainerKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      setActive(null);
    }
  };

  onMount(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () =>
      setSpacing(mq.matches ? cardSpacing : Math.round(cardSpacing * 0.39));
    update();
    mq.addEventListener("change", update);

    onCleanup(() => {
      mq.removeEventListener("change", update);
    });
  });

  const getCardTransform = (card: CardItem, index: number) => {
    const offsetX = (index - middle) * spacing();
    if (isCurrentActive(card)) {
      return `translate(0px, 0px) rotate(0deg) scale(${activeScale})`;
    }
    if (isAnyCardActive()) {
      return `translate(${offsetX * 0.4}px, 250px) rotate(${0.2 * card.config.rotate}deg) scale(0.7)`;
    }
    return `translate(${offsetX}px, ${card.config.y}px) rotate(${card.config.rotate}deg) scale(1)`;
  };

  const getCardZIndex = (card: CardItem) => {
    if (isCurrentActive(card)) return 50;
    return card.config.zIndex;
  };

  return (
    <div class="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        onKeyDown={handleContainerKeydown}
        class="relative mx-auto flex h-96 w-full max-w-5xl items-center justify-center [--height:300px] [--width:200px] lg:[--width:300px]"
      >
        <For each={cards}>
          {(card, index) => (
            <button
              type="button"
              onClick={(e) => handleCardClick(card, e)}
              style={{
                width: "var(--width)",
                "min-height": "var(--height)",
                "margin-left": "calc(var(--width) / -2)",
                "margin-top": "calc(var(--height) / -2)",
                "z-index": getCardZIndex(card),
                transform: getCardTransform(card, index()),
                transition: `transform ${springDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 300ms ease`,
              }}
              class={cn(
                "absolute top-1/2 left-1/2 flex cursor-pointer flex-col items-start justify-between overflow-hidden border p-2 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 hover:ring-1 hover:ring-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:rounded-3xl md:p-4",
                card.className,
              )}
            >
              {!isCurrentActive(card) && card.skeleton}
              <div class="mt-5">
                <h2 class="font-heading max-w-40 text-left text-base font-semibold tracking-tight text-foreground md:text-3xl">
                  {card.title}
                </h2>
                {isCurrentActive(card) && (
                  <p
                    style={{
                      opacity: isCurrentActive(card) ? 1 : 0,
                      transform: isCurrentActive(card)
                        ? "translate(0, 0)"
                        : "translate(20px, 20px)",
                      transition: `opacity ${springDuration}ms ease, transform ${springDuration}ms ease`,
                    }}
                    class="mt-1 mb-6 text-left text-sm leading-relaxed text-muted-foreground md:text-base"
                  >
                    {card.description}
                  </p>
                )}
              </div>
              <div class="absolute right-3 bottom-3 flex items-center gap-1 text-xs text-muted-foreground/50">
                <span>Click</span>
                <IconPointer2 size={12} />
              </div>
            </button>
          )}
        </For>
      </div>
    </div>
  );
}

export default CraftCards;
