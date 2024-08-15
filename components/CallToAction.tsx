export function CallToAction() {
  return (
    <div class="flex justify-center items-center relative py-28">
      <div class="w-[555px] flex flex-col gap-7 z-10 mr-[35%]">
        <h1 class="text-[80px] leading-[90px] font-bold">
          We’re here to Increase your Productivity
        </h1>
        <img
          src="/vector_underline.png"
          width={487}
          height={34}
          alt="underline-vector"
          loading="eager"
        />
        <p class="w-[461px]">
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest featuresin managing work every day.
        </p>
        <button class="rounded-xl text-white bg-primary min-w-20 px-5 h-10 w-min whitespace-nowrap">
          Try free trial
        </button>
      </div>

      <img
        src="/charizard.webp"
        width={672}
        height={648}
        alt="charizard"
        class="absolute right-0"
        loading="eager"
      />
    </div>
  );
}
