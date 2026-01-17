<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte"; // <--- Import Footer
  import icon from "$lib/assets/gdgIcon.png";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" href={icon} />
  <title>GDG On Campus - ADTU</title>
</svelte:head>

<section class="bg-dots flex min-h-screen flex-col">
  <Navbar />

  {@render children?.()}

  <Footer />
</section>
