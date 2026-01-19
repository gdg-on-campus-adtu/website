<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    color?: string;
    image?: string;
    title: string;
    description?: string;
    children?: Snippet;
  }

  let { color = "bg-white", image, title, description, children }: Props = $props();
</script>

<div
  class="group relative flex w-full flex-col overflow-hidden border-[3px] border-black shadow-[8px_8px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] md:flex-row {color}"
>
  <div class="h-60 w-full shrink-0 border-b-[3px] border-black bg-[#D9D9D9] md:h-auto md:w-2/5 md:border-b-0 md:border-r-[3px]">
    {#if image}
      <img 
        src={image} 
        alt={title} 
        class="h-full w-full object-cover" 
      />
    {/if}
  </div>

  <div class="flex flex-1 flex-col justify-between p-6 md:p-8">
    <div class="flex flex-col gap-3">
      <h3 class="font-monocraft text-2xl leading-tight md:text-3xl lg:text-4xl">{title}</h3>

      {#if description}
        <p class="font-space text-sm leading-relaxed font-medium text-black/90 md:text-base">
          {description}
        </p>
      {/if}
    </div>

    {#if children}
      <div class="mt-6 flex flex-col gap-4 pt-4 md:mt-auto md:flex-row md:items-center md:justify-between border-t-2 border-black/10">
        {@render children()}
      </div>
    {/if}
  </div>
</div>