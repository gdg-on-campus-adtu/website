<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import MouseTrail from "$lib/components/MouseTrail.svelte";
  import icon from "$lib/assets/gdgIcon.png";

  import Lenis from "lenis";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  let { children } = $props();

  onMount(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={icon} />
  <title>GDG On Campus - ADTU</title>
</svelte:head>

<MouseTrail />

<div
  class="bg-dots font-open relative flex min-h-screen flex-col bg-white selection:bg-[#4285F4] selection:text-white"
>
  <Navbar />

  {#key $page.url.pathname}
    <main in:fade={{ duration: 400, delay: 100 }} class="flex-1">
      {@render children?.()}
    </main>
  {/key}

  <Footer />
</div>
