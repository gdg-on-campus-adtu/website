<script lang="ts">
  import communityImg from "$lib/assets/imgs/gallery/community-img.webp";
  import Card from "$lib/components/ui/card/card.svelte";
  import * as Button from "$lib/components/ui/button/index.js";
  import { pastEvents } from "$lib/data/events";
  import { galleryItems } from "$lib/data/gallery";

  interface HeadlineWord {
    text: string;
    color: string;
  }

  const headline: HeadlineWord[] = [
    { text: "code", color: "text-[#FF0028]" },
    { text: "connect", color: "text-[#5FA953]" },
    { text: "create", color: "text-[#F4BB19]" },
  ];

  const recentEvents = [...pastEvents].reverse().slice(0, 3);
  const galleryPreview = [...galleryItems].reverse().slice(0, 7);
</script>

<section
  id="home"
  class="relative flex min-h-screen flex-col justify-center overflow-hidden pb-40 md:pb-0 lg:pb-0"
>
  <div
    class="font-space relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center select-none"
  >
    <p class="mb-6 text-sm text-[#4285F4] md:text-lg">Official Chapter · Google Developer Group</p>

    <h1
      class="font-monocraft pixel-text mb-13 flex flex-col items-center justify-center gap-4 text-6xl md:text-8xl lg:flex-row lg:gap-6"
    >
      {#each headline as word}
        <span class={word.color}>
          {word.text}<span class="hidden lg:inline">.</span>
        </span>
      {/each}
    </h1>

    <p class="font-space max-w-2xl text-base text-gray-500 md:text-lg">
      Join the Google Developer Group at Assam down town University to learn, collaborate, and build
      amazing things with the latest Google technologies.
    </p>

    <div class="mt-10 flex justify-center lg:hidden">
      <a href="https://gdg.community.dev/gdg-on-campus-assam-down-town-university-guwahati-india/">
        <Button.Root variant="blue" class="font-archivo h-12 px-8 text-base">
          Join the Community
        </Button.Root>
      </a>
    </div>
  </div>

  <div class="relative z-10 hidden justify-center pb-6 select-none lg:flex">
    <span class="scroll-indicator text-5xl text-[#4285F4]">⌄</span>
  </div>
</section>

<section id="about" class="flex min-h-screen w-full flex-col justify-center px-6 md:px-16">
  <div class="mx-auto w-full max-w-7xl">
    <h2 class="font-monocraft pixel-text mb-30 text-center text-4xl text-[#4285F4] md:text-6xl">
      What does GDG On Campus-ADTU do?
    </h2>
    <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div
        class="font-space text-justify text-base leading-relaxed font-medium text-black md:text-left md:text-lg"
      >
        <ul class="list-disc space-y-5 pl-5">
          <li>
            <span class="font-open text-xl font-semibold text-[#4285F4]">Tech Hub & Teams:</span>
            GDG On Campus-ADTU is your hub for all things tech! We have focused teams in
            <span class="font-bold italic underline underline-offset-2"
              >AI/ML, Android, Web, Cyber Security Game Dev and more</span
            >
            to help students explore and master the latest technology.
          </li>
          <li>
            <span class="font-open text-xl font-semibold text-[#F4BB19]">Flagship Event:</span>
            Our main event, the
            <span class="font-bold italic underline underline-offset-2">ByteHacks Hackathon</span>,
            reflects our dedication to innovation, collaboration, and hands-on learning.
          </li>
          <li>
            <span class="font-open text-xl font-semibold text-[#5FA953]">Skill Building:</span>
            Through
            <span class="font-bold italic underline underline-offset-2"
              >workshops, tech talks, and interactive sessions</span
            >, we keep our members updated with emerging trends and equip them with
            <span class="font-bold italic underline">practical, real-world skills</span>.
          </li>
          <li>
            <span class="font-open text-xl font-semibold text-[#FF0028]">Community:</span>
            Join us to become part of a
            <span class="font-bold italic underline underline-offset-2">vibrant tech ecosystem</span
            >, learn from peers and mentors, and bring your ideas to life!
          </li>
        </ul>
      </div>

      <div class="relative flex justify-center lg:justify-end">
        <div
          class="h-64 w-full border-[3px] border-black bg-[#D9D9D9] shadow-[10px_10px_0px_0px_#000] md:h-80 md:w-[90%]"
        >
          <img src={communityImg} alt="GDG Community Img" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</section>

<section id="events" class="flex w-full flex-col justify-center px-6 pt-20 pb-10 md:px-16">
  <div class="mx-auto w-full max-w-7xl">
    <div class="mb-16 text-center md:mb-24">
      <h2 class="font-monocraft pixel-text mb-6 text-4xl text-[#4285F4] md:text-6xl">
        Recent Events
      </h2>
      <p class="font-space mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
        Check out some of our recent events and activities.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
      {#each recentEvents as evt}
        <div>
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

    <div class="mt-25 flex justify-center">
      <a href="/events">
        <Button.Root variant="blue" class="font-archivo flex items-center gap-2 px-10 py-6">
          Visit Events Page <span class="text-2xl leading-none">→</span>
        </Button.Root>
      </a>
    </div>
  </div>
</section>

<section
  id="gallery"
  class="flex min-h-screen w-full flex-col justify-center px-6 py-20 pt-60 md:px-16"
>
  <div class="mx-auto w-full max-w-7xl">
    <div class="mb-16 text-center md:mb-24">
      <h2 class="font-monocraft pixel-text mb-6 text-4xl text-[#4285F4] md:text-6xl">Gallery</h2>
      <p class="font-space mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
        Visual stories from the GDG ADTU community.
      </p>
    </div>

    <div
      class="grid h-auto grid-cols-1 gap-4 md:grid-cols-2 lg:h-200 lg:grid-cols-4 lg:grid-rows-3"
    >
      <div
        class="group relative overflow-hidden border-2 border-black bg-[#D9D9D9] lg:col-span-2 lg:row-span-2"
      >
        {#if galleryPreview[0]}
          <img
            src={galleryPreview[0].src}
            alt="Gallery 1"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        {/if}
      </div>

      <div
        class="group relative overflow-hidden border-2 border-black bg-[#D9D9D9] lg:col-span-2 lg:row-span-1"
      >
        {#if galleryPreview[1]}
          <img
            src={galleryPreview[1].src}
            alt="Gallery 2"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        {/if}
      </div>

      <div
        class="group relative overflow-hidden border-2 border-black bg-[#D9D9D9] lg:col-span-2 lg:row-span-1"
      >
        {#if galleryPreview[2]}
          <img
            src={galleryPreview[2].src}
            alt="Gallery 3"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        {/if}
      </div>

      <div
        class="group relative min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] lg:col-span-1 lg:row-span-1"
      >
        {#if galleryPreview[3]}
          <img
            src={galleryPreview[3].src}
            alt="Gallery 4"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        {/if}
      </div>

      <div
        class="group relative min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] lg:col-span-1 lg:row-span-1"
      >
        {#if galleryPreview[4]}
          <img
            src={galleryPreview[4].src}
            alt="Gallery 5"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        {/if}
      </div>

      <div
        class="group relative min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] lg:col-span-1 lg:row-span-1"
      >
        {#if galleryPreview[5]}
          <img
            src={galleryPreview[5].src}
            alt="Gallery 6"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        {/if}
      </div>

      <div
        class="group relative block min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] md:hidden lg:col-span-1 lg:row-span-1 lg:block"
      >
        {#if galleryPreview[6]}
          <img
            src={galleryPreview[6].src}
            alt="Gallery 7"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        {/if}
      </div>
    </div>

    <div class="mt-25 flex justify-center">
      <a href="/gallery">
        <Button.Root variant="blue" class="font-archivo flex items-center gap-2 px-10 py-6">
          Visit Gallery Page <span class="text-2xl leading-none">→</span>
        </Button.Root>
      </a>
    </div>
  </div>
</section>
