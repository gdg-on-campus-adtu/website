<script lang="ts">
  import { onMount } from "svelte";

  const ease = 0.15;

  const strokeWidth = 7;
  const borderWidth = 1.5;
  const borderColor = "#000000";

  let trails = $state([
    { color: "#34A853", length: 40, points: [] as { x: number; y: number }[], d: "" },
    { color: "#4285F4", length: 35, points: [] as { x: number; y: number }[], d: "" },
    { color: "#EA4335", length: 30, points: [] as { x: number; y: number }[], d: "" },
    { color: "#FBBC04", length: 15, points: [] as { x: number; y: number }[], d: "" },
  ]);

  let mouse = { x: 0, y: 0 };
  let smoothMouse = { x: 0, y: 0 };
  let isInitialized = false;

  function lerp(start: number, end: number, amt: number) {
    return start + (end - start) * amt;
  }

  function handleMouseMove(e: MouseEvent) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (!isInitialized) {
      smoothMouse.x = e.clientX;
      smoothMouse.y = e.clientY;
      isInitialized = true;
    }
  }

  onMount(() => {
    // 1. Performance Check: Do not start the animation loop on mobile/touch devices
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) return;

    if (typeof window !== "undefined") {
      mouse.x = window.innerWidth / 2;
      mouse.y = window.innerHeight / 2;
      smoothMouse.x = window.innerWidth / 2;
      smoothMouse.y = window.innerHeight / 2;
    }

    let animationFrameId: number;

    const updatePath = () => {
      smoothMouse.x = lerp(smoothMouse.x, mouse.x, ease);
      smoothMouse.y = lerp(smoothMouse.y, mouse.y, ease);

      trails.forEach((trail) => {
        trail.points.unshift({ x: smoothMouse.x, y: smoothMouse.y });

        while (trail.points.length > trail.length) {
          trail.points.pop();
        }

        if (trail.points.length > 1) {
          let d = `M ${trail.points[0].x} ${trail.points[0].y}`;
          for (let i = 1; i < trail.points.length; i++) {
            d += ` L ${trail.points[i].x} ${trail.points[i].y}`;
          }
          trail.d = d;
        }
      });

      animationFrameId = requestAnimationFrame(updatePath);
    };

    updatePath();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<svelte:window onmousemove={handleMouseMove} />

<svg
  class="hidden md:block pointer-events-none fixed inset-0 z-50 h-full w-full bg-transparent"
  shape-rendering="geometricPrecision"
>
  {#each trails as trail}
    <path
      d={trail.d}
      stroke={borderColor}
      stroke-width={strokeWidth + borderWidth * 2}
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      class="opacity-80"
    />

    <path
      d={trail.d}
      stroke={trail.color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
  {/each}
</svg>