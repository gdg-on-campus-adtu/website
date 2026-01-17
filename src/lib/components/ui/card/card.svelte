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
  class="relative flex h-full flex-col gap-4 border-[3px] border-black p-6 shadow-[10px_10px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_#000] {color}"
>
  <div class="aspect-square w-full shrink-0 overflow-hidden border-[3px] border-black bg-[#D9D9D9]">
    {#if image}
      <img src={image} alt={title} class="h-full w-full object-cover" />
    {/if}
  </div>

  <div class="flex grow flex-col gap-3">
    <h3 class="font-monocraft text-2xl leading-tight">{title}</h3>

    {#if description}
      <p class="font-space line-clamp-3 text-sm leading-snug font-medium text-black/80">
        {description}
      </p>
    {/if}

    {#if children}
      <div class="mt-auto pt-2">
        {@render children()}
      </div>
    {/if}
  </div>
</div>
