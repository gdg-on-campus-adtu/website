<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";
  import * as Button from "$lib/components/ui/button/index.js";
  import { teamMembers } from "$lib/data/team";
  import { fade } from "svelte/transition";
  import { Linkedin, Github, Twitter, Users, MessageCircle, Sparkles } from "@lucide/svelte";

  let isRecruiting = false;
</script>

<div class="relative flex min-h-screen flex-col pt-50 pb-20">
  <div class="container mx-auto mb-20 px-6 text-center md:px-16">
    <div>
      <h1 class="font-monocraft pixel-text mb-6 text-5xl text-[#4285F4] md:text-7xl">
        Meet The Team
      </h1>
      <p class="font-space mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
        We're a team of developers, designers, and organizers working to grow the tech community at
        ADTU.
      </p>
    </div>
  </div>

  <section class="container mx-auto px-6 md:px-16">
    <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {#each teamMembers as member, i (member.id)}
        <div class="h-full">
          <Card
            color={member.color}
            title={member.name}
            description={member.role}
            image={member.image}
          >
            <div
              class="font-space mt-2 flex w-full flex-col justify-between border-t-2 border-black/10 pt-4"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold tracking-wider text-gray-500 uppercase">Connect</span
                >
                <div class="flex gap-3">
                  {#if member.socials.linkedin}
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-black transition-transform hover:-translate-y-1 hover:text-[#0077B5]"
                      aria-label="LinkedIn"><Linkedin size={20} strokeWidth={2.5} /></a
                    >
                  {/if}
                  {#if member.socials.github}
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-black transition-transform hover:-translate-y-1 hover:text-[#333]"
                      aria-label="GitHub"><Github size={20} strokeWidth={2.5} /></a
                    >
                  {/if}
                  {#if member.socials.twitter}
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-black transition-transform hover:-translate-y-1 hover:text-[#1DA1F2]"
                      aria-label="Twitter"><Twitter size={20} strokeWidth={2.5} /></a
                    >
                  {/if}
                </div>
              </div>
            </div>
          </Card>
        </div>
      {/each}
    </div>

    <div in:fade={{ delay: 200 }} class="mt-32">
      {#if isRecruiting}
        <div
          class="relative overflow-hidden border-[3px] border-black bg-[#F4BB19] p-10 shadow-[10px_10px_0px_0px_#000] md:p-16"
        >
          <div
            class="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full border-[3px] border-black bg-[#5FA953]"
          ></div>
          <div
            class="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full border-[3px] border-black bg-[#4285F4]"
          ></div>
          <div class="relative z-10 flex flex-col items-center text-center">
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <Users size={32} class="text-black" />
            </div>
            <h2 class="font-monocraft text-3xl text-black md:text-5xl">Join the Core Team?</h2>
            <p class="font-space mt-4 mb-8 max-w-xl text-lg font-bold text-black md:text-xl">
              We are always looking for enthusiastic individuals to help us lead and organize
              events.
            </p>
            <a href="mailto:gdg@adtu.in">
              <Button.Root
                variant="blue"
                size="lg"
                class="border-2 border-black bg-white text-black hover:bg-gray-100"
              >
                Apply to Join <span class="ml-2 text-xl">→</span>
              </Button.Root>
            </a>
          </div>
        </div>
      {:else}
        <div
          class="relative overflow-hidden border-[3px] border-black bg-[#5FA953] p-10 shadow-[10px_10px_0px_0px_#000] md:p-16"
        >
          <div
            class="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full border-[3px] border-black bg-[#4285F4]"
          ></div>
          <div
            class="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full border-[3px] border-black bg-[#F4BB19]"
          ></div>
          <div class="relative z-10 flex flex-col items-center text-center">
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <Sparkles size={32} class="text-black" />
            </div>
            <h2 class="font-monocraft text-3xl text-black md:text-5xl">Become a Member!</h2>
            <p class="font-space mt-4 mb-8 max-w-xl text-lg font-bold text-black/80 md:text-xl">
              Core team applications are closed, but you can join our community for updates.
            </p>
            <a
              href="https://gdg.community.dev/gdg-on-campus-assam-down-town-university-guwahati-india/"
              target="_blank"
            >
              <Button.Root
                variant="blue"
                size="lg"
                class="border-2 border-black bg-white text-black hover:bg-gray-100"
              >
                Join Community <MessageCircle class="ml-2 h-5 w-5" />
              </Button.Root>
            </a>
          </div>
        </div>
      {/if}
    </div>
  </section>
</div>
