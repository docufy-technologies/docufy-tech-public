import { Link } from "@tanstack/solid-router";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "FAQs", to: "/faq" },
];

export default function NavBar() {
  return (
    <nav class="fixed left-1/2 top-2 z-50 -translate-x-1/2 backdrop-blur-xl">
      <ul class="mx-auto flex w-fit gap-2 rounded-full border-2 border-secondary bg-background/70 px-2 py-1 shadow-sm max-sm:gap-0 max-sm:p-1">
        {NAV_ITEMS.map((item) => (
          <li>
            <Link
              to={item.to}
              class="block rounded-full px-3 py-1.5 text-base transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
