<script lang="ts">
  import { onMount } from "svelte";
  import * as Button from "$lib/components/ui/button/index.js";
  import gdgLogo from "$lib/assets/imgs/gdg-logo.png";
  
  // Import Icons for the mobile menu
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

  // Helper to check active state
  const isActive = (path: string) => $page.url.pathname === path;
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class="fixed top-0 right-0 left-0 z-50 mx-6 mt-6 hidden h-16 items-center justify-between rounded-lg bg-white/80 px-8 shadow-[0_1px_3px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-transform duration-500 ease-in-out md:flex
  {isVisible ? 'translate-y-0' : '-translate-y-[200%]'}"
>
  <img src={gdgLogo} alt="GDG Logo" class="-ml-19 h-25 w-auto" />

  <ul class="text-md font-space -ml-8 hidden gap-8 text-black md:flex">
    <li><a href="/" class="cursor-pointer hover:text-gray-700">Home</a></li>
    <li><a href="/events" class="cursor-pointer hover:text-gray-700">Events</a></li>
    <li><a href="/projects" class="cursor-pointer hover:text-gray-700">Projects</a></li>
    <li><a href="/team" class="cursor-pointer hover:text-gray-700">Team</a></li>
    <li><a href="/gallery" class="cursor-pointer hover:text-gray-700">Gallery</a></li>
  </ul>

  <a href="https://gdg.community.dev/gdg-on-campus-assam-down-town-university-guwahati-india/">
    <Button.Root variant="blue" class="font-archivo">Join the Community</Button.Root>
  </a>
</nav>

<nav
  class="fixed bottom-0 right-0 left-0 z-50 mx-4 mb-6 flex h-16 items-center justify-around rounded-2xl bg-white/90 px-2 shadow-[0_4px_10px_rgba(0,0,0,0.3)] backdrop-blur-3xl transition-transform duration-500 ease-in-out md:hidden
  {isVisible ? 'translate-y-0' : 'translate-y-[200%]'}"
>
  <a href="/" class="flex flex-col items-center justify-center p-2 text-gray-500 transition-colors {isActive('/') ? 'text-[#4285F4]' : ''}">
    <Home size={24} strokeWidth={isActive('/') ? 2.5 : 2} />
  </a>

  <a href="/events" class="flex flex-col items-center justify-center p-2 text-gray-500 transition-colors {isActive('/events') ? 'text-[#4285F4]' : ''}">
    <CalendarDays size={24} strokeWidth={isActive('/events') ? 2.5 : 2} />
  </a>

  <a href="/projects" class="flex flex-col items-center justify-center p-2 text-gray-500 transition-colors {isActive('/projects') ? 'text-[#4285F4]' : ''}">
    <FolderCode size={24} strokeWidth={isActive('/projects') ? 2.5 : 2} />
  </a>

  <a href="/team" class="flex flex-col items-center justify-center p-2 text-gray-500 transition-colors {isActive('/team') ? 'text-[#4285F4]' : ''}">
    <Users size={24} strokeWidth={isActive('/team') ? 2.5 : 2} />
  </a>

  <a href="/gallery" class="flex flex-col items-center justify-center p-2 text-gray-500 transition-colors {isActive('/gallery') ? 'text-[#4285F4]' : ''}">
    <ImageIcon size={24} strokeWidth={isActive('/gallery') ? 2.5 : 2} />
  </a>
</nav>