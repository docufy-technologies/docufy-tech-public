import { useTheme } from "@/components/provider/theme-provider";
import { Sparkles } from "@/components/ui/sparkles";

export function OurPartners() {
  const { theme } = useTheme();
  return (
    <div className="h-screen w-full overflow-x-clip overflow-y-hidden">
      <div className="mx-auto mt-32 w-full max-w-2xl">
        <div className="text-center text-3xl text-foreground">
          <h1 className="text-primary lg:text-5xl font-normal">Our Partners</h1>
        </div>

        <div className="mt-14 mx-auto w-fit">
          <img src="/nnoblacklogo.png" alt="NNO Logo" className="h-16 w-auto" />
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--secondary),transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t bg-background/80" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
          color={theme === "dark" ? "#ffffff" : "#000000"}
        />
      </div>
    </div>
  );
}
