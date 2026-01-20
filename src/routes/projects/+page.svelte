<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";
  import * as Button from "$lib/components/ui/button/index.js";
  import { projects } from "$lib/data/projects";
  import { fly, fade } from "svelte/transition";
  import { Github, ExternalLink, User } from "@lucide/svelte";

  let visibleCount = 2;
  function loadMore() {
    visibleCount += 2;
  }
</script>

<div class="relative flex min-h-screen flex-col pt-50 pb-20">
  <div class="container mx-auto mb-16 px-6 text-center md:px-16">
    <h1 class="font-monocraft pixel-text mb-6 text-5xl text-[#4285F4] md:text-7xl">Projects</h1>
    <p class="font-space mx-auto max-w-2xl text-base text-gray-500 md:text-lg">
      A showcase of creativity and collaboration. See how the GDG AdtU community learns and grows
      through hands-on projects.
    </p>
  </div>

  <section class="container mx-auto px-6 md:px-16">
    {#if projects.length > 0}
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
        {#each projects.slice(0, visibleCount) as project, i (project.id)}
          <div in:fly={{ y: 50, duration: 500, delay: i * 40 }} class="h-full">
            <Card
              color={project.color}
              title={project.title}
              description={project.description}
              image={project.image}
            >
              <div class="font-space flex h-full flex-col justify-between pt-2">
                <div class="mb-4 flex items-center gap-3 border-b-2 border-black/5 pb-4">
                  <div
                    class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                  >
                    <User size={16} class="text-black" />
                  </div>
                  <div class="flex flex-col leading-none">
                    <span class="text-[10px] font-bold tracking-wider text-black uppercase"
                      >Built By</span
                    >
                    {#if project.author.url}
                      <a
                        href={project.author.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sm font-bold text-black hover:underline hover:decoration-2 hover:underline-offset-2"
                      >
                        {project.author.name}
                      </a>
                    {:else}
                      <span class="text-sm font-bold text-black">{project.author.name}</span>
                    {/if}
                  </div>
                </div>
                <div class="flex flex-col gap-6">
                  <div class="flex flex-wrap gap-2">
                    {#each project.tags as tag}
                      <span
                        class="rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-bold text-black shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]"
                      >
                        {tag}
                      </span>
                    {/each}
                  </div>
                  <div class="flex flex-wrap items-center gap-4 border-t-2 border-black/10 pt-4">
                    {#if project.links.repo}
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group flex items-center gap-2 text-sm font-bold text-black transition-opacity hover:opacity-70"
                      >
                        <Github size={18} /> View Code
                      </a>
                    {/if}
                    {#if project.links.demo}
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group flex items-center gap-2 text-sm font-bold text-black transition-opacity hover:opacity-70"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    {/if}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        {/each}
      </div>
      {#if visibleCount < projects.length}
        <div class="mt-20 flex justify-center" in:fade>
          <Button.Root
            variant="blue"
            size="lg"
            onclick={loadMore}
            class="min-w-40 border-2 border-black bg-white text-black hover:bg-gray-200"
          >
            Load More Projects
          </Button.Root>
        </div>
      {/if}
      <div in:fade class="mt-32">
        <div
          class="relative overflow-hidden border-[3px] border-black bg-[#F4BB19] p-10 shadow-[10px_10px_0px_0px_#000] md:p-16"
        >
          <div
            class="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full border-[3px] border-black bg-[#FF0028]"
          ></div>
          <div
            class="absolute bottom-0 left-0 -mb-10 -ml-10 h-32 w-32 rounded-full border-[3px] border-black bg-[#4285F4]"
          ></div>
          <div class="relative z-10 flex flex-col items-center text-center">
            <h2 class="font-monocraft text-3xl text-black md:text-5xl">Built Something Awesome?</h2>
            <p class="font-space mt-4 mb-8 max-w-xl text-lg font-medium text-black/80">
              Don't keep your code hidden. Submit your project and showcase your innovation.
            </p>
            <a href="mailto:gdg@adtu.in">
              <Button.Root
                variant="blue"
                size="lg"
                class="border-2 border-black bg-white text-black hover:bg-gray-200"
              >
                Submit for Showcase <span class="ml-2 text-xl">→</span>
              </Button.Root>
            </a>
          </div>
        </div>
      </div>
    {:else}
      <div
        in:fade={{ duration: 400 }}
        class="flex min-h-[50vh] w-full flex-col items-center justify-center rounded-xl border-4 border-dashed border-black/20 bg-gray-50/50 p-8 text-center md:p-16"
      >
        <div
          class="mb-8 flex h-28 w-28 items-center justify-center rounded-full border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          <span class="text-6xl">🚀</span>
        </div>
        <h2 class="font-monocraft mb-4 text-3xl text-black md:text-4xl">The Lab is Quiet...</h2>
        <p class="font-space mb-10 max-w-lg text-lg text-gray-500">
          The stage is set, but the spotlight is waiting. Be the pioneer—submit your project and be
          the first to showcase your work here!
        </p>
        <div class="flex flex-col gap-4 md:flex-row">
          <a href="mailto:gdg@adtu.in">
            <Button.Root
              variant="blue"
              size="lg"
              class="border-2 border-black bg-[#4285F4] text-white">Submit Your Project</Button.Root
            >
          </a>
          <a href="https://github.com" target="_blank">
            <Button.Root
              variant="blue"
              size="lg"
              class="border-2 border-black bg-white text-black hover:bg-yellow-50"
              >Visit our GitHub</Button.Root
            >
          </a>
        </div>
      </div>
    {/if}
  </section>
</div>
