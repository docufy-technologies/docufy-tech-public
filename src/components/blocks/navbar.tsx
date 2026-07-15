import { Link } from "@tanstack/solid-router";
import { createSignal, type JSX } from "solid-js";
import { cn } from "@/lib/utils";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

function NavBar() {
  const [position, setPosition] = createSignal<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      class="mx-auto flex w-fit rounded-full border-2 border-secondary bg-transparent backdrop-blur-xl z-100 fixed top-1 left-1/2 -translate-x-1/2 px-2 py-1 max-sm:p-1 gap-4 max-sm:gap-0"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <NavTab setPosition={setPosition} to="/">
        Home
      </NavTab>
      <NavTab setPosition={setPosition} to="/about">
        About
      </NavTab>
      <NavTab setPosition={setPosition} to="/solutions">
        Solutions
      </NavTab>
      <NavTab setPosition={setPosition} to="/faq">
        FAQs
      </NavTab>

      <Cursor position={position} />
    </ul>
  );
}

function NavTab(props: {
  children: JSX.Element;
  setPosition: (position: Position) => void;
  class?: string;
  to: string;
}) {
  let ref: HTMLLIElement | undefined;

  return (
    <Link to={props.to as "/"}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref) return;
          const { width } = ref.getBoundingClientRect();
          props.setPosition({
            width,
            opacity: 1,
            left: ref.offsetLeft,
          });
        }}
        class={cn(
          "relative z-10 block cursor-pointer px-3 py-1.5 text-base! md:text-base rounded-full hover:bg-secondary",
          props.class,
        )}
      >
        {props.children}
      </li>
    </Link>
  );
}

function Cursor(props: { position: () => Position }) {
  return (
    <li
      class="absolute z-0 h-9 -translate-y-2 max-sm:-translate-y-2 rounded-full bg-secondary transition-all duration-300 ease-out"
      style={{
        left: `${props.position().left}px`,
        width: `${props.position().width}px`,
        opacity: props.position().opacity,
      }}
    />
  );
}

export default NavBar;
