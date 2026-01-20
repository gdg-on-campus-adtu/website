<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";
  import Card2 from "$lib/components/ui/card/card2.svelte";
  import * as Button from "$lib/components/ui/button/index.js";
  import { fly } from "svelte/transition";
  import { upcomingEvents, pastEvents } from "$lib/data/events";

  let visibleCount = 6;
  function loadMore() {
    visibleCount += 3;
  }
</script>

<div class="relative flex min-h-screen flex-col pt-50 pb-20">
  <div class="container mx-auto mb-16 px-6 text-center md:px-16">
    <h1 class="font-monocraft pixel-text mb-6 text-5xl text-[#4285F4] md:text-7xl">Events</h1>
    <p class="font-space mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
      Explore our upcoming workshops, tech talks, and hackathons. Join us to learn, connect, and
      grow.
    </p>
  </div>

  <section class="container mx-auto mb-24 px-6 md:px-16">
    <div class="mb-10 flex items-center gap-4">
      <h2 class="font-monocraft pixel-text text-3xl text-black md:text-5xl">Upcoming</h2>
      <div class="h-1 flex-1 rounded-full bg-black/10"></div>
    </div>

    {#if upcomingEvents.length > 0}
      <div class="flex flex-col gap-10">
        {#each upcomingEvents as evt}
          <Card2
            color={evt.color}
            title={evt.title}
            description={evt.description}
            image={evt.image}
          >
            <div class="font-space flex flex-col items-start justify-center gap-1">
              <span
                class="border border-black bg-black px-3 py-1 text-sm font-bold text-white shadow-[2px_2px_0_0_rgba(0,0,0,0.3)]"
              >
                {evt.date}
              </span>
              <span class="mt-1 text-sm font-bold tracking-wide text-black/80 uppercase">
                {evt.type}
              </span>
            </div>
            <a
              href={evt.link}
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-4 w-full md:mt-0 md:w-auto"
            >
              <Button.Root
                variant="blue"
                size="lg"
                class="border-2 border-black bg-[#4285F4] text-white"
              >
                {evt.linkText || "RSVP Now"} <span class="ml-2 text-xl">→</span>
              </Button.Root>
            </a>
          </Card2>
        {/each}
      </div>
    {:else}
      <div
        class="flex min-h-75 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-black/30 bg-gray-50 p-8 text-center md:p-12"
      >
        <div
          class="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-yellow-100 text-5xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
        >
          🚧
        </div>
        <h3 class="font-monocraft mb-3 text-2xl text-black md:text-3xl">Cooking Something Up...</h3>
        <p class="font-space mb-8 max-w-lg text-lg text-gray-500">
          There are no upcoming events scheduled right now, but our team is planning the next big
          thing.
        </p>
        <a
          href="https://gdg.community.dev/gdg-on-campus-assam-down-town-university-guwahati-india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button.Root
            variant="blue"
            size="lg"
            class="border-2 border-black bg-white text-black transition-all hover:bg-yellow-50"
          >
            Join the Community
          </Button.Root>
        </a>
      </div>
    {/if}
  </section>

  <section id="past-events" class="container mx-auto px-6 md:px-16">
    <div class="mb-10 flex items-center gap-4">
      <h2 class="font-monocraft pixel-text text-3xl text-gray-500 md:text-5xl">Past Events</h2>
      <div class="h-1 flex-1 rounded-full bg-gray-200"></div>
    </div>
    <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
      {#each pastEvents.slice(0, visibleCount) as evt, i (evt.title + evt.date)}
        <div in:fly={{ y: 50, duration: 500, delay: i * 40 }} class="h-full">
          <Card color={evt.color} title={evt.title} description={evt.description} image={evt.image}>
            <div class="font-space flex w-full items-center justify-between">
              <div class="flex flex-col">
                <span class="border-b-2 border-black text-sm font-bold">{evt.date}</span>
                <span class="mt-1 text-xs font-medium opacity-70">{evt.type}</span>
              </div>
              <a
                href={evt.link}
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-1 text-sm font-bold text-black transition-all hover:opacity-70"
              >
                Read More <span class="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Card>
        </div>
      {/each}
    </div>
    {#if visibleCount < pastEvents.length}
      <div class="mt-25 flex justify-center pb-10">
        <Button.Root
          variant="blue"
          size="lg"
          onclick={loadMore}
          class="min-w-40 border-2 border-black bg-white text-black hover:bg-gray-200"
        >
          Load More Events
        </Button.Root>
      </div>
    {/if}
  </section>
</div>
