<script lang="ts">
  import communityImg from "$lib/assets/imgs/gallery/community-img.webp";
  // import bytehacksImg from "$lib/assets/imgs/gallery/byteHacks/bytesHacks-img-1.webp";
  // import aiImg from "$lib/assets/imgs/gallery/buildWithAI/buildWithAI-img-1.webp";

  import kickoffImg from "$lib/assets/imgs/evnts/gdg-kickoff-evnt.webp";
  import iotImg from "$lib/assets/imgs/evnts/iot-evnt.webp";
  import uiuxImg from "$lib/assets/imgs/evnts/ui-ux-evnt.webp";

  import Card from "$lib/components/ui/card/card.svelte";
  import * as Button from "$lib/components/ui/button/index.js";

  interface HeadlineWord {
    text: string;
    color: string;
  }

  const headline: HeadlineWord[] = [
    { text: "code.", color: "text-[#E34735]" },
    { text: "connect.", color: "text-[#5FA953]" },
    { text: "create.", color: "text-[#F4BB19]" },
  ];

  const evts = [
    {
      color: "bg-[#E34735]",
      image: uiuxImg,
      title: "Introduction to Design & UI/UX",
      date: "Nov 28, 2025",
      description:
        "Kickstart your design journey! Learn the fundamentals of UI/UX design, including user research, wireframing, and visual design principles. This session is perfect for beginners looking to understand how intuitive and engaging digital experiences are crafted.",
    },
    {
      color: "bg-[#5FA953]",
      image: iotImg,
      title: "Introduction to IoT",
      date: "Nov 22, 2025",
      description:
        "Step into the world of smart technology! Get an introduction to the Internet of Things, exploring how devices connect, communicate, and automate the real world. Ideal for beginners curious about sensors, smart systems, and real-world IoT applications.",
    },
    {
      color: "bg-[#F4BB19]",
      image: kickoffImg,
      title: "GDG Kickoff & Git Workshop",
      date: "Nov 06, 2025",
      description:
        "A new chapter of innovation! Featuring technical deep dives on Git & Open Source by Advisor Debarchito Nath, and Cyber Security insights by Lead Himan Kalita.",
    },
  ];
</script>

<section id="home" class="relative flex min-h-screen flex-col justify-center overflow-hidden">
  <div
    class="font-space relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center select-none"
  >
    <p class="mb-6 text-base text-[#4285F4] md:text-lg">
      Official Chapter · Google Developer Group
    </p>

    <h1 class="font-monocraft pixel-text mb-13 flex flex-wrap justify-center text-6xl md:text-8xl">
      {#each headline as word}
        <span class={word.color}>{word.text}</span>
      {/each}
    </h1>

    <p class="font-space max-w-2xl text-base text-gray-500 md:text-lg">
      Join the Google Developer Group at Assam down town University to learn, collaborate, and build
      amazing things with the latest Google technologies.
    </p>
  </div>

  <div class="relative z-10 flex justify-center pb-6 select-none">
    <span class="scroll-indicator text-5xl text-[#4285F4]">⌄</span>
  </div>

  <div
    class="pointer-events-none absolute bottom-0 left-0 z-0 h-70 w-full"
    style="background: radial-gradient(ellipse 100% 80% at 50% 0%, transparent 40%, rgba(255,255,255,1) 100%);"
  ></div>
</section>

<section id="about" class="flex min-h-screen w-full flex-col justify-center bg-white px-6 md:px-16">
  <div class="mx-auto w-full max-w-7xl">
    <h2 class="font-monocraft pixel-text mb-30 text-center text-4xl text-[#4285F4] md:text-6xl">
      What does GDG On Campus-ADTU do?
    </h2>
    <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
      <div
        class="font-space text-justify text-base leading-relaxed font-medium text-black md:text-left md:text-lg"
      >
        <ul class="list-disc space-y-5 pl-5">
          <li>
            <span class="text-xl font-bold text-[#4285F4]">Tech Hub & Teams:</span>
            GDG On Campus-ADTU is your hub for all things tech! We have focused teams in
            <span class="font-bold italic underline underline-offset-2"
              >AI/ML, Android, Web, Cyber Security Game Dev and more</span
            >
            to help students explore and master the latest technology.
          </li>
          <li>
            <span class="text-xl font-bold text-[#F4BB19]">Flagship Event:</span>
            Our main event, the
            <span class="font-bold italic underline underline-offset-2">ByteHacks Hackathon</span>,
            reflects our dedication to innovation, collaboration, and hands-on learning.
          </li>
          <li>
            <span class="text-xl font-bold text-[#5FA953]">Skill Building:</span>
            Through
            <span class="font-bold italic underline underline-offset-2"
              >workshops, tech talks, and interactive sessions</span
            >, we keep our members updated with emerging trends and equip them with
            <span class="font-bold italic underline">practical, real-world skills</span>.
          </li>
          <li>
            <span class="text-xl font-bold text-[#E34735]">Community:</span>
            Join us to become part of a
            <span class="font-bold italic underline underline-offset-2">vibrant tech ecosystem</span
            >, learn from peers and mentors, and bring your ideas to life!
          </li>
        </ul>
      </div>

      <div class="relative flex justify-center md:justify-end">
        <div
          class="h-64 w-full border-[3px] border-black bg-[#D9D9D9] shadow-[10px_10px_0px_0px_#000] md:h-80 md:w-[90%]"
        >
          <img src={communityImg} alt="GDG Community Img" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</section>

<section id="events" class="flex w-full flex-col justify-center bg-white px-6 pt-20 pb-10 md:px-16">
  <div class="mx-auto w-full max-w-7xl">
    <h2 class="font-monocraft pixel-text mb-20 text-center text-4xl text-[#4285F4] md:text-6xl">
      Recent Events
    </h2>

    <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
      {#each evts as evt}
        <Card color={evt.color} title={evt.title} description={evt.description} image={evt.image}>
          <div class="font-space flex w-full items-center justify-between">
            <span class="border-b-2 border-black text-sm font-bold">
              {evt.date}
            </span>

            <a
              href="/"
              class="group flex items-center gap-1 text-sm font-bold text-black transition-all hover:opacity-70"
            >
              Read more
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Card>
      {/each}
    </div>

    <div class="mt-25 flex justify-center">
      <a href="/">
        <Button.Root variant="blue" class="font-archivo flex items-center gap-2 px-10 py-6">
          Visit Events Page <span class="text-2xl leading-none">→</span>
        </Button.Root>
      </a>
    </div>
  </div>
</section>

<section
  id="gallery"
  class="flex min-h-screen w-full flex-col justify-center bg-white px-6 py-20 pt-60 md:px-16"
>
  <div class="mx-auto w-full max-w-7xl">
    <div class="mb-16 text-center md:mb-24">
      <h2 class="font-monocraft pixel-text mb-6 text-4xl text-[#4285F4] md:text-6xl">Gallery</h2>
      <p class="font-space mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
        Take a look at some of our recent events and activities.
      </p>
    </div>

    <div class="grid h-auto grid-cols-1 gap-4 md:h-200 md:grid-cols-4 md:grid-rows-3">
      <div
        class="group relative overflow-hidden border-2 border-black bg-[#D9D9D9] md:col-span-2 md:row-span-2"
      >
        <!-- <img
          src=""
          alt="Gallery 1"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> -->
      </div>

      <div
        class="group relative overflow-hidden border-2 border-black bg-[#D9D9D9] md:col-span-2 md:row-span-1"
      >
        <!-- <img
          src=""
          alt="Gallery 2"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> -->
      </div>

      <div
        class="group relative overflow-hidden border-2 border-black bg-[#D9D9D9] md:col-span-2 md:row-span-1"
      >
        <!-- <img
          src=""
          alt="Gallery 3"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> -->
      </div>

      <div
        class="group relative min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] md:col-span-1 md:row-span-1"
      >
        <!-- <img
          src=""
          alt="Gallery 4"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> -->
      </div>

      <div
        class="group relative min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] md:col-span-1 md:row-span-1"
      >
        <!-- <img
          src=""
          alt="Gallery 5"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> -->
      </div>

      <div
        class="group relative min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] md:col-span-1 md:row-span-1"
      >
        <!-- <img
          src=""
          alt="Gallery 6"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> -->
      </div>

      <div
        class="group relative min-h-50 overflow-hidden border-2 border-black bg-[#D9D9D9] md:col-span-1 md:row-span-1"
      >
        <!-- <img
          src=""
          alt="Gallery 7"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> -->
      </div>
    </div>

    <div class="mt-25 flex justify-center">
      <a href="/">
        <Button.Root variant="blue" class="font-archivo flex items-center gap-2 px-10 py-6">
          Visit Gallery Page <span class="text-2xl leading-none">→</span>
        </Button.Root>
      </a>
    </div>
  </div>
</section>
