import type { JSX } from "solid-js";

type NoiseConfig = {
  opacity: number;
  scale: number;
};

type ShadowOverlayProps = {
  sizing?: "fill" | "stretch";
  color?: string;
  noise?: NoiseConfig;
  className?: string;
  children: JSX.Element;
  maskImageURL?: string;
  opacity?: number;
};

export function EtheralShadow(props: ShadowOverlayProps) {
  const sizing = props.sizing ?? "fill";
  const color = props.color ?? "var(--secondary)";
  const maskImageURL = props.maskImageURL ?? "/mask-2.png";
  const opacity = props.opacity ?? 1;

  return (
    <div class={props.className} style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
      <div
        class="absolute inset-0"
        style={{
          backgroundColor: color,
          maskImage: `url('${maskImageURL}')`,
          maskSize: sizing === "stretch" ? "100% 100%" : "cover",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          opacity,
        }}
      />

      <div class="relative z-10 h-full w-full">{props.children}</div>

      {props.noise && props.noise.opacity > 0 && (
        <div
          class="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url("/noise.png")',
            backgroundSize: `${props.noise.scale * 200}px`,
            backgroundRepeat: "repeat",
            opacity: props.noise.opacity / 2,
          }}
        />
      )}
    </div>
  );
}
