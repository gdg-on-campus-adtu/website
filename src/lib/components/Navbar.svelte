<script lang="ts">
  import { onMount } from "svelte";
  import * as Button from "$lib/components/ui/button/index.js";
  import gdgLogo from "$lib/assets/imgs/gdg-logo.png";

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
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class="fixed top-0 right-0 left-0 z-50 mx-6 mt-6 flex h-16 items-center justify-between rounded-lg bg-white/80 px-8 shadow-[0_1px_3px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-transform duration-500 ease-in-out
  {isVisible ? 'translate-y-0' : '-translate-y-[200%]'}"
>
  <img src={gdgLogo} alt="GDG Logo" class="-ml-17 h-25 w-auto" />

  <ul class="text-md font-space -ml-8 hidden gap-8 text-black md:flex">
    <li><a href="/" class="cursor-pointer hover:text-gray-700">Home</a></li>
    <li><a href="/events" class="cursor-pointer hover:text-gray-700">Events</a></li>
    <li><a href="/projects" class="cursor-pointer hover:text-gray-700">Projects</a></li>
    <li><a href="/team" class="cursor-pointer hover:text-gray-700">Team</a></li>
    <li><a href="/" class="cursor-pointer hover:text-gray-700">Gallery</a></li>
  </ul>

  <a href="https://gdg.community.dev/gdg-on-campus-assam-down-town-university-guwahati-india/">
    <Button.Root variant="blue" class="font-archivo">Join the Community</Button.Root>
  </a>
</nav>
