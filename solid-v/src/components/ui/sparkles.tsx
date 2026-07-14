import { cn } from "@/lib/utils";

export function Sparkles(props: { class?: string; className?: string; density?: number; opacity?: number }) {
  const density = props.density ?? 800;
  const opacity = props.opacity ?? 1;
  const gap = Math.max(18, 140 - Math.min(80, Math.round(density / 25)));

  return (
    <div
      aria-hidden="true"
      class={cn(
        "bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0_1.2px,transparent_1.4px)] bg-repeat",
        `bg-[length:${gap}px_${gap}px]`,
        props.class,
        props.className,
      )}
      style={`opacity: ${opacity};`}
    />
  );
}
