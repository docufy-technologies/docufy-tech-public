import {
  IconCheck,
  IconCircleFilled,
  IconFingerprintOff,
  IconSearch,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { GhoshamajaLine } from "@/components/images/ghoshamajaline";
import AnimatedButton from "@/components/ui/animated-button";
import { BracketContainer } from "@/components/ui/bracket-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { Sparkles } from "@/components/ui/sparkles";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="max-w-screen">
      {/* hero section */}
      <section id="hero-section" className="h-screen w-full">
        <EtheralShadow
          maskImageURL="/mask-1.png"
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        >
          <div className="flex flex-col max-w-4xl p-6 w-full mx-auto h-full justify-center items-center gap-12 max-sm:gap-8 text-center">
            <img
              src="/logo512.png"
              alt="docufy tech logo"
              className="mx-auto w-48 md:w-72"
            />
            <BracketContainer>
              <h1 className="uppercase lg:text-5xl max-sm:text-2xl">
                Build without limits
              </h1>
              <p className="text-sm md:text-xl font-extralight">
                We build{" "}
                <span className="font-extrabold">
                  enterprise-grade, high-performance
                </span>{" "}
                systems with seamless{" "}
                <span className="font-extrabold">AI/ML integration</span>,
                ensuring robust{" "}
                <span className="font-extrabold">
                  data, cyber, and digital security
                </span>{" "}
                that results into{" "}
                <span className="font-extrabold">
                  accelerating your business growth
                </span>
                .
              </p>
            </BracketContainer>

            <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-4 max-sm:gap-2 w-full max-w-sm justify-center items-center">
              <AnimatedButton size="lg" className="w-full">
                <a
                  href="https://calendly.com/docufytechnologies/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  Book A Call Now
                </a>
              </AnimatedButton>
              <Button variant={"outline"} size={"lg"} className="w-full">
                <a
                  href="mailto:info@tech.docufybd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  Contact Team
                </a>
              </Button>
            </div>
          </div>
        </EtheralShadow>
      </section>

      {/* why docufy tech section */}
      <section id="why-docufy-tech-section" className="h-screen relative">
        <h1 className="text-center uppercase">
          The Values Docufy Tech Provides
        </h1>
        <div className="py-16">
          <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
            <div className="relative z-10 grid grid-cols-6 gap-3">
              <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                <CardContent className="relative m-auto size-fit pt-6 flex flex-col items-center justify-center">
                  <div className="relative flex h-24 w-56 items-center my-12">
                    <GhoshamajaLine className="absolute inset-0 size-full" />
                    <h2 className="mx-auto block w-fit text-lg font-semibold">
                      100% Ownership
                    </h2>
                  </div>
                  <p className="text-center">
                    You receive the complete source code and handoff materials,
                    so your team can maintain, extend, and own it without
                    dependency.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                <CardContent className="pt-6">
                  <div className="relative mx-auto flex aspect-square size-20 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border my-10">
                    <IconFingerprintOff className="m-auto h-fit w-14" />
                  </div>
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h2 className="group-hover:text-secondary-950 text-lg font-medium transition">
                      Security, Built In
                    </h2>
                    <p className="text-foreground">
                      Security is considered from the start with practical
                      safeguards aligned to scope, reducing risk and protecting
                      what you build.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                <CardContent className="pt-6">
                  <div className="pt-6 lg:px-6">
                    <svg
                      className="dark:text-muted-foreground w-full"
                      viewBox="0 0 386 123"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Delivery You Can Trust</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                        fill="url(#paint0_linear_0_106)"
                      />
                      <path
                        className="text-primary-600 dark:text-primary-500"
                        d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_106"
                          x1="3"
                          y1="60"
                          x2="3"
                          y2="123"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            className="text-primary/15 dark:text-primary/35"
                            stopColor="currentColor"
                          />
                          <stop
                            className="text-transparent"
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity="0.103775"
                          />
                        </linearGradient>
                        <clipPath id="clip0_0_106">
                          <rect
                            width="358"
                            height="30"
                            fill="white"
                            transform="translate(14 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative z-10 mt-14 space-y-2 text-center">
                    <h2 className="text-lg font-medium transition">
                      Delivery You Can Trust
                    </h2>
                    <p className="text-foreground">
                      Scope, expectations, and timelines stay aligned, so
                      delivery feels predictable, fair, and low-drama.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative col-span-full overflow-hidden lg:col-span-3">
                <CardContent className="grid pt-6 sm:grid-cols-2">
                  <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                      <IconSearch className="m-auto size-5" strokeWidth={1} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="group-hover:text-secondary-950 text-lg font-medium transition">
                        Research-Led Execution
                      </h2>
                      <p className="text-foreground">
                        Every project starts with research, so the solution fits
                        the business goal, not just the brief.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                    <div className="absolute left-3 top-2 flex gap-1">
                      <span className="block size-2 rounded-full border"></span>
                      <span className="block size-2 rounded-full border"></span>
                      <span className="block size-2 rounded-full border"></span>
                    </div>
                    <svg
                      className="w-full sm:w-[150%]"
                      viewBox="0 0 366 231"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Research-Led Execution</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.148438 231V179.394L1.92188 180.322L2.94482 177.73L4.05663 183.933L6.77197 178.991L7.42505 184.284L9.42944 187.985L11.1128 191.306V155.455L13.6438 153.03V145.122L14.2197 142.829V150.454V154.842L15.5923 160.829L17.0793 172.215H19.2031V158.182L20.7441 153.03L22.426 148.111V142.407L24.7471 146.86V128.414L26.7725 129.918V120.916L28.1492 118.521L28.4653 127.438L29.1801 123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988V148.111L123.4 152.613L125.401 158.182L130.547 150.454V156.566L131.578 155.455L134.143 158.182L135.594 168.136L138.329 158.182L140.612 160.829L144.681 169.5L147.011 155.455L148.478 151.787L151.02 152.613L154.886 145.122L158 143.412L159.406 140.637L159.496 133.348L162.295 127.87V122.082L163.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.308 82.3223L333.525 52.7986L334.097 52.145L334.735 55.6812L337.369 59.8108V73.676L340.743 87.9656L343.843 96.3728L348.594 82.7747L349.607 81.045L351 89.7556L352.611 96.3728L355.149 94.9932L356.688 102.176L359.396 108.784L360.684 111.757L365 95.7607V231H148.478H0.148438Z"
                        fill="url(#paint0_linear_0_705)"
                      />
                      <path
                        className="text-primary-600 dark:text-primary-500"
                        d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_705"
                          x1="0.85108"
                          y1="0.947876"
                          x2="0.85108"
                          y2="230.114"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            className="text-primary/15 dark:text-primary/35"
                            stopColor="currentColor"
                          />
                          <stop
                            className="text-transparent"
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity="0.01"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative col-span-full overflow-hidden lg:col-span-3">
                <CardContent className="grid h-full pt-6 sm:grid-cols-[70%_30%]">
                  <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border">
                      <IconCheck className="m-auto size-6" strokeWidth={1} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium transition">
                        Enterprise-Caliber Process
                      </h2>
                      <p className="text-foreground">
                        A transparent, straightforward process built for teams
                        that value credibility, reliability, and minimal
                        friction.
                      </p>
                    </div>
                  </div>
                  <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                      <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                        <div className="ring-background size-7">
                          <IconCircleFilled className="size-full rounded-full bg-secondary text-secondary" />
                        </div>
                      </div>
                      <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                        <div className="ring-background size-8">
                          <IconCircleFilled className="size-full rounded-full bg-secondary text-secondary" />
                        </div>
                      </div>
                      <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                        <div className="ring-background size-7">
                          <IconCircleFilled className="size-full rounded-full bg-secondary text-secondary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* our partners section */}
      <section
        id="partners-section"
        className="h-fit w-full overflow-x-clip overflow-y-hidden mt-20"
      >
        <div className="mx-auto w-full max-w-2xl">
          <div className="text-center text-3xl text-foreground">
            <h1 className="lg:text-4xl text-xl font-bold uppercase mb-4">
              Our Partners And Patrons
            </h1>
          </div>
          <div className="mt-14 mx-auto w-fit" id="partners-logo">
            <img src="/nnologo.png" alt="NNO Logo" className="h-12 w-auto" />
          </div>
        </div>
        <div className="relative -mt-32 h-96 w-full overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)]">
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--secondary),transparent_70%)] before:opacity-40" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-secondary bg-background" />
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
      </section>
    </div>
  );
}
