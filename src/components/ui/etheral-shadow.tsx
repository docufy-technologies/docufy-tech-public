import { type JSX, createSignal, onCleanup, onMount } from "solid-js";

interface AnimationConfig {
  preview?: boolean;
  scale: number;
  speed: number;
}

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

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number,
): number {
  if (fromLow === fromHigh) {
    return toLow;
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

let instanceCounter = 0;

export function EtheralShadow(props: ShadowOverlayProps) {
  const sizing = props.sizing ?? "fill";
  const color = props.color ?? "var(--secondary)";
  const maskImageURL = props.maskImageURL ?? "/mask-2.png";
  const opacity = props.opacity ?? 1;

  const animation: AnimationConfig = { scale: 100, speed: 90 };
  const id = `shadowoverlay-${++instanceCounter}`;
  const animationEnabled = animation && animation.scale > 0;

  const displacementScale = animation
    ? mapRange(animation.scale, 1, 100, 20, 100)
    : 0;
  const animationDuration = animation
    ? mapRange(animation.speed, 1, 100, 1000, 50)
    : 1;

  let feColorMatrixRef: SVGFEColorMatrixElement | undefined;
  let animationFrameId: number | undefined;
  let startTime: number | undefined;

  const [hueValue, setHueValue] = createSignal(180);

  onMount(() => {
    if (!animationEnabled || !feColorMatrixRef) return;

    startTime = performance.now();
    const durationMs = (animationDuration / 25) * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime!;
      const progress = (elapsed % durationMs) / durationMs;
      const value = progress * 360;
      setHueValue(value);
      if (feColorMatrixRef) {
        feColorMatrixRef.setAttribute("values", String(value));
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
  });

  onCleanup(() => {
    if (animationFrameId !== undefined) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  return (
    <div
      class={props.className}
      style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}
    >
      <div
        style={{
          position: "absolute",
          inset: `${-displacementScale}px`,
          filter: animationEnabled ? `url(#${id}) blur(4px)` : "none",
        }}
      >
        {animationEnabled && (
          <svg style={{ position: "absolute" }}>
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={`${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}
        <div
          style={{
            "background-color": color,
            "mask-image": `url('${maskImageURL}')`,
            "mask-size": sizing === "stretch" ? "100% 100%" : "cover",
            "mask-repeat": "no-repeat",
            "mask-position": "center",
            width: "100%",
            height: "100%",
            opacity,
          }}
        />
      </div>

      <div class="relative z-10 h-full w-full">{props.children}</div>

      {props.noise && props.noise.opacity > 0 && (
        <div
          class="pointer-events-none absolute inset-0"
          style={{
            "background-image": 'url("/noise.png")',
            "background-size": `${props.noise.scale * 200}px`,
            "background-repeat": "repeat",
            opacity: props.noise.opacity / 2,
          }}
        />
      )}
    </div>
  );
}
