<script lang="ts">
  import InfiniteGrid from "$lib/components/InfiniteGrid.svelte";
  import { fade } from "svelte/transition";
  import { Grid3x3, ScrollText } from "@lucide/svelte";
  import clsx from "clsx";

  import { galleryItems } from "$lib/data/gallery";

  const reversedItems = [...galleryItems].reverse();

  let viewMode = $state<"grid" | "scroll">("scroll");

  function toggleMode(mode: "grid" | "scroll") {
    viewMode = mode;
  }

  $effect(() => {
    const footer = document.querySelector("footer");
    if (viewMode === "grid") {
      document.body.style.overflow = "hidden";
      if (footer) footer.style.display = "none";
    } else {
      document.body.style.overflow = "";
      if (footer) footer.style.display = "";
    }
    return () => {
      document.body.style.overflow = "";
      if (footer) footer.style.display = "";
    };
  });

  $effect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && viewMode === "grid") {
        viewMode = "scroll";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
</script>

<div class="font-open relative w-full bg-transparent select-none">
  <div
    class={clsx(
      "pointer-events-none flex flex-col items-center justify-center px-6",
      viewMode === "grid"
        ? "fixed inset-0 z-0 h-full w-full backdrop-blur-none"
        : "relative z-10 w-full bg-transparent pt-25 pb-10 md:pt-50",
    )}
  >
    {#key viewMode}
      <div in:fade={{ duration: 500, delay: 50 }} class="pointer-events-auto text-center">
        <h1
          class="font-monocraft pixel-text mb-4 text-5xl text-[#4285F4] shadow-white drop-shadow-lg md:text-7xl"
        >
          The Gallery
        </h1>
        <p
          class="font-space mx-auto max-w-xl rounded-lg bg-white/80 p-2 text-lg text-gray-600 md:bg-transparent"
        >
          Visual stories from the GDG ADTU community.
        </p>
      </div>
    {/key}
  </div>

  {#if viewMode === "grid"}
    <div transition:fade={{ duration: 400 }} class="fixed inset-0 z-10 h-full w-full">
      <InfiniteGrid itemsData={galleryItems}>
        {#snippet children({ data })}
          <div
            class="group relative h-full w-full overflow-hidden border-2 border-black bg-gray-100"
          >
            <img
              src={data.src}
              alt=""
              class="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        {/snippet}
      </InfiniteGrid>
    </div>
  {/if}

  {#if viewMode === "scroll"}
    <div
      transition:fade={{ duration: 400 }}
      class="relative z-20 container mx-auto min-h-screen px-4 pb-40"
    >
      <div class="columns-1 gap-4 md:columns-2 lg:columns-3">
        {#each reversedItems as item (item.id)}
          <div class="mb-4 break-inside-avoid">
            <div
              class="relative w-full overflow-hidden border-2 border-black bg-white transition-transform hover:scale-[1.01]"
            >
              <img src={item.src} alt="" class="block h-auto w-full" loading="lazy" />
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <div class="fixed right-0 bottom-10 left-0 z-30 hidden justify-center gap-4 md:flex">
    <button
      onclick={() => toggleMode("scroll")}
      aria-label="Switch to scroll view"
      aria-pressed={viewMode === "scroll"}
      class={clsx(
        "font-space flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 font-bold shadow-[4px_4px_0_0_#000] transition-all active:translate-y-1 active:shadow-none",
        viewMode === "scroll"
          ? "bg-[#5FA953] text-white"
          : "bg-white text-gray-500 hover:bg-gray-50",
      )}
    >
      <ScrollText size={20} />
      Scroll
    </button>

    <button
      onclick={() => toggleMode("grid")}
      aria-label="Switch to grid view"
      aria-pressed={viewMode === "grid"}
      class={clsx(
        "font-space flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 font-bold shadow-[4px_4px_0_0_#000] transition-all active:translate-y-1 active:shadow-none",
        viewMode === "grid" ? "bg-[#F4BB19] text-black" : "bg-white text-gray-500 hover:bg-gray-50",
      )}
    >
      <Grid3x3 size={20} />
      Grid
    </button>
  </div>
</div>
