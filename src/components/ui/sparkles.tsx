import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/solid";
import { createSignal, onMount, Show } from "solid-js";

type SparklesProps = {
  class?: string;
  className?: string;
  size?: number;
  minSize?: number | null;
  density?: number;
  speed?: number;
  minSpeed?: number | null;
  opacity?: number;
  opacitySpeed?: number;
  minOpacity?: number | null;
  color?: string;
  background?: string;
  options?: ISourceOptions;
};

let engineReady = false;
const enginePromise = initParticlesEngine(async (engine) => {
  await loadSlim(engine);
}).then(() => {
  engineReady = true;
});

export function Sparkles(props: SparklesProps) {
  const [ready, setReady] = createSignal(engineReady);

  onMount(() => {
    if (!ready()) {
      enginePromise.then(() => setReady(true));
    }
  });

  const id = `sparkles-${Math.random().toString(36).slice(2, 9)}`;

  const size = props.size ?? 1;
  const minSize = props.minSize ?? null;
  const density = props.density ?? 800;
  const speed = props.speed ?? 1;
  const minSpeed = props.minSpeed ?? null;
  const opacity = props.opacity ?? 1;
  const opacitySpeed = props.opacitySpeed ?? 3;
  const minOpacity = props.minOpacity ?? null;
  const color = props.color ?? "#FFFFFF";
  const background = props.background ?? "transparent";

  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: true,
        direction: "none",
        speed: {
          min: minSpeed || speed / 10,
          max: speed,
        },
        straight: false,
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  } satisfies ISourceOptions;

  const mergedOptions = () => ({
    ...defaultOptions,
    ...props.options,
  });

  return (
    <Show when={ready()}>
      <Particles
        id={id}
        options={mergedOptions()}
        class={props.class ?? props.className}
      />
    </Show>
  );
}
