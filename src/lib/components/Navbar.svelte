<script lang="ts">
  import { onMount } from "svelte";
  import * as Button from "$lib/components/ui/button/index.js";
  import gdgLogo from "$lib/assets/imgs/gdg-logo.png";

  import { Home, CalendarDays, FolderCode, Users, Image as ImageIcon } from "@lucide/svelte";
  import { page } from "$app/stores";

  let isVisible = $state(true);
  let lastScrollY = 0;
  let scrollTimeout: ReturnType<typeof setTimeout>;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 10) {
      isVisible = true;
    } else if (currentScrollY > lastScrollY) {
      isVisible = false;
    } else {
      isVisible = true;
    }
    lastScrollY = currentScrollY;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isVisible = true;
    }, 100);
  }

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/events", icon: CalendarDays, label: "Events" },
    { path: "/projects", icon: FolderCode, label: "Projects" },
    { path: "/team", icon: Users, label: "Team" },
    { path: "/gallery", icon: ImageIcon, label: "Gallery" },
  ];

  let activeIndex = $derived(navItems.findIndex((item) => item.path === $page.url.pathname));
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class="fixed top-0 right-0 left-0 z-50 mx-6 mt-6 hidden h-16 items-center justify-between rounded-lg bg-white/80 px-8 shadow-[0_1px_3px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-transform duration-500 ease-in-out lg:flex
  {isVisible ? 'translate-y-0' : '-translate-y-[200%]'}"
>
  <img src={gdgLogo} alt="GDG Logo" class="-ml-19 h-25 w-auto" />

  <ul class="text-md font-space -ml-8 hidden gap-8 text-black lg:flex">
    {#each navItems as item}
      {@const isActive = item.path === $page.url.pathname}
      <li>
        <a
          href={item.path}
          class="group relative cursor-pointer py-1 transition-colors hover:text-gray-700 {isActive
            ? 'font-bold text-[#4285F4]'
            : ''}"
        >
          {item.label}

          <span
            class="absolute bottom-0 left-0 h-0.5 bg-[#4285F4] transition-all duration-300 ease-out
            {isActive ? 'w-full' : 'w-0 group-hover:w-full'}"
          ></span>
        </a>
      </li>
    {/each}
  </ul>

  <a href="https://gdg.community.dev/gdg-on-campus-assam-down-town-university-guwahati-india/">
    <Button.Root variant="blue" class="font-archivo">Join the Community</Button.Root>
  </a>
</nav>

<nav
  class="fixed right-0 bottom-0 left-0 z-50 mx-4 mb-6 h-16 rounded-2xl bg-white/90 px-2 shadow-[0_4px_10px_rgba(0,0,0,0.3)] backdrop-blur-3xl transition-transform duration-500 ease-in-out lg:hidden
  {isVisible ? 'translate-y-0' : 'translate-y-[200%]'}"
>
  <div class="relative grid h-full w-full grid-cols-5 items-center">
    <div
      class="absolute inset-y-0 my-auto h-14 w-14 rounded-full bg-gray-300 transition-all duration-300 ease-out"
      style="left: calc({activeIndex * 20}% + (100% / 10) - 1.75rem);"
    ></div>

    {#each navItems as item}
      <a
        href={item.path}
        class="z-10 flex h-full flex-col items-center justify-center transition-colors duration-300"
      >
        <item.icon
          size={24}
          strokeWidth={item.path === $page.url.pathname ? 2.5 : 2}
          class={item.path === $page.url.pathname ? "text-gray-600" : "text-gray-500"}
        />
      </a>
    {/each}
  </div>
</nav>
