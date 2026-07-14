import type { JSX } from "solid-js";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "destructive" | "accent" | "link";
type ButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80",
  outline: "border border-border bg-background hover:bg-muted hover:text-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-muted hover:text-foreground",
  destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
  accent: "bg-accent text-accent-foreground hover:bg-accent/80",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-9 gap-1.5 px-3",
  xs: "h-6 gap-1 px-2.5 text-xs",
  sm: "h-8 gap-1 px-3",
  lg: "h-10 gap-1.5 px-4",
  icon: "size-9",
  "icon-xs": "size-6",
  "icon-sm": "size-8",
  "icon-lg": "size-10",
};

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button(props: ButtonProps) {
  const { variant = "default", size = "default", children, class: className, ...rest } = props;

  return (
    <button
      type="button"
      class={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-4xl border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export const buttonVariants = () => "";
