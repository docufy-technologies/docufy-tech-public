import { createRootRoute, Outlet } from "@tanstack/solid-router";
import "@/styles.css";
import Footer from "@/components/blocks/footer";
import NavBar from "@/components/blocks/navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
