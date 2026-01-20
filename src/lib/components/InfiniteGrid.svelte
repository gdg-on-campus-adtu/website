<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { Motion, useMotionValue, useDragControls } from "svelte-motion";
  import {
    generateMatrix,
    getItemDistanceFromContainer,
    getMatrixItem,
    isPointInsideBounds,
    matrix,
    type Point,
  } from "$lib/utils/grid-utils";

  type Item = {
    id: string;
    childrenIndex: number | null;
    gridIndex: { row: number; col: number };
    coordinates: Point;
  };

  let { children, itemsData }: { children: Snippet<[{ data: any }]>; itemsData: any[] } = $props();

  const ITEM_SIZE_HEIGHT = 350;
  const ITEM_SIZE_WIDTH = 500;

  let containerRef: HTMLDivElement;
  let items = $state<Item[]>([]);
  let isReady = $state(false);

  const itemsBaseGrid = $derived(
    generateMatrix<number>(itemsData.map((_: any, index: number) => index)),
  );

  const dragControls = useDragControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function setupItems() {
    if (!containerRef) return;
    const { clientWidth: containerWidth, clientHeight: containerHeight } = containerRef;

    const minColsNumber = Math.ceil(containerWidth / ITEM_SIZE_WIDTH) + 1;
    const minRowsNumber = Math.ceil(containerHeight / ITEM_SIZE_HEIGHT) + 1;

    const centerOffsetX = (minColsNumber * ITEM_SIZE_WIDTH - containerWidth) / 2;
    const centerOffsetY = (minRowsNumber * ITEM_SIZE_HEIGHT - containerHeight) / 6;

    const itemsArray: Item[] = [];

    for (let rowIndex = 0; rowIndex < minRowsNumber; rowIndex++) {
      for (let colIndex = 0; colIndex < minColsNumber; colIndex++) {
        itemsArray.push({
          id: `${rowIndex}-${colIndex}`,
          childrenIndex: getMatrixItem(itemsBaseGrid, rowIndex, colIndex),
          gridIndex: { row: rowIndex, col: colIndex },
          coordinates: {
            x: colIndex * ITEM_SIZE_WIDTH - centerOffsetX,
            y: rowIndex * ITEM_SIZE_HEIGHT - centerOffsetY,
          },
        });
      }
    }

    items = itemsArray;
    isReady = true;
  }

  function onUpdate() {
    if (!containerRef) return;

    const dragX = x.get();
    const dragY = y.get();

    const {
      clientTop: top,
      clientLeft: left,
      clientHeight: bottom,
      clientWidth: right,
    } = containerRef;
    const containerBounds = { top, bottom, left, right };

    const itemsToAdd: Item[] = [];
    const itemsToRemove: Set<string> = new Set();

    const currentItems = [...items];

    for (const item of currentItems) {
      const itemCenterPoint = {
        x: item.coordinates.x + dragX + containerBounds.left + ITEM_SIZE_WIDTH / 2,
        y: item.coordinates.y + dragY + containerBounds.top + ITEM_SIZE_HEIGHT / 2,
      };

      if (isPointInsideBounds(itemCenterPoint, containerBounds)) {
        for (const pos of matrix) {
          const [ox, oy] = pos;
          const rowIndex = item.gridIndex.row + oy;
          const colIndex = item.gridIndex.col + ox;
          const id = `${rowIndex}-${colIndex}`;

          const exists =
            currentItems.find((i) => i.id === id) || itemsToAdd.find((i) => i.id === id);
          if (exists) continue;

          itemsToAdd.push({
            id,
            childrenIndex: getMatrixItem(itemsBaseGrid, rowIndex, colIndex),
            gridIndex: { row: rowIndex, col: colIndex },
            coordinates: {
              x: item.coordinates.x + ITEM_SIZE_WIDTH * ox,
              y: item.coordinates.y + ITEM_SIZE_HEIGHT * oy,
            },
          });
        }
      } else {
        const distance = getItemDistanceFromContainer(
          itemCenterPoint,
          ITEM_SIZE_WIDTH,
          ITEM_SIZE_HEIGHT,
          containerBounds,
        );
        if (distance > 0) itemsToRemove.add(item.id);
      }
    }

    if (itemsToAdd.length === 0 && itemsToRemove.size === 0) return;

    setItems((prev) => {
      const combined = [...prev, ...itemsToAdd].filter((i) => !itemsToRemove.has(i.id));
      const unique = new Map(combined.map((i) => [i.id, i]));
      return Array.from(unique.values());
    });
  }

  function setItems(fn: (prev: Item[]) => Item[]) {
    items = fn(items);
  }

  onMount(() => {
    setupItems();
    const unsubscribeX = x.onChange(onUpdate);
    const unsubscribeY = y.onChange(onUpdate);
    const ro = new ResizeObserver(() => onUpdate());
    if (containerRef) ro.observe(containerRef);

    return () => {
      unsubscribeX();
      unsubscribeY();
      ro.disconnect();
    };
  });
</script>

<div
  bind:this={containerRef}
  class="absolute inset-0 cursor-grab overflow-hidden active:cursor-grabbing"
  onpointerdown={(e) => dragControls.start(e)}
>
  <Motion
    drag
    {dragControls}
    dragListener={false}
    dragTransition={{ timeConstant: 250, power: 0.3 }}
    style={{ x, y }}
    let:motion
  >
    <div use:motion class="h-full w-full">
      {#each items as item (item.id)}
        {#if item.childrenIndex !== null}
          {@const data = itemsData[item.childrenIndex]}
          <div
            class="absolute flex items-center justify-center p-4 transition-opacity duration-500"
            style:width="{ITEM_SIZE_WIDTH}px"
            style:height="{ITEM_SIZE_HEIGHT}px"
            style:left="{item.coordinates.x}px"
            style:top="{item.coordinates.y}px"
          >
            {@render children?.({ data })}
          </div>
        {/if}
      {/each}
    </div>
  </Motion>
</div>
