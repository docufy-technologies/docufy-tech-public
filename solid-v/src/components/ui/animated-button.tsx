import type { JSX } from "solid-js";
import { cn } from "@/lib/utils";

type AnimatedButtonVariant =
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "accent"
  | "link";

type AnimatedButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

type AnimatedButtonProps = JSX.HTMLAttributes<HTMLDivElement> & {
  children?: JSX.Element;
  variant?: AnimatedButtonVariant;
  size?: AnimatedButtonSize;
};

const variantClasses: Record<AnimatedButtonVariant, string> = {
  default: "bg-primary text-primary-foreground",
  outline: "bg-background text-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "bg-transparent text-foreground",
  destructive: "bg-destructive/10 text-destructive",
  accent: "bg-accent text-accent-foreground",
  link: "bg-transparent text-primary",
};

const sizeClasses: Record<AnimatedButtonSize, string> = {
  default:
    "h-9 gap-1.5 px-3 text-sm has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
  xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
  sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
  lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
  icon: "size-9",
  "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
  "icon-sm": "size-8",
  "icon-lg": "size-10",
};

/**
 * AnimatedButton
 * - theme-aware: uses Tailwind `dark:` classes so it works in both light and dark mode
 * - accepts all native button props (onClick, className, type, etc.)
 */
const AnimatedButton = ({
  children,
  class: className,
  variant = "default",
  size = "default",
  ...rest
}: AnimatedButtonProps) => {
  return (
    <div
      {...rest}
      class={cn(
        "group inline-flex items-center justify-center rounded-4xl relative overflow-hidden border border-secondary cursor-pointer text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      <span class="relative z-10 flex h-full w-full items-center justify-center tracking-wide">
        {children}
      </span>
      <span class="pointer-events-none absolute inset-0 rounded-4xl bg-[linear-gradient(-75deg,transparent_30%,rgba(255,255,255,.35)_50%,transparent_70%)] bg-[length:200%_100%] opacity-30" />
    </div>
  );
};

export default AnimatedButton;
