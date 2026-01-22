export type Point = { x: number; y: number };
export type Bounds = { top: number; bottom: number; left: number; right: number };

// Clockwise order starting from top left
export const matrix = [
    [-1, 1], [0, 1], [1, 1],
    [1, 0], [1, -1], [0, -1],
    [-1, -1], [-1, 0]
] as const;

export function wrap(min: number, max: number, value: number): number {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
}

export function generateMatrix<T>(arr: T[]): (T | null)[][] {
    const itemsArray = arr.flatMap((x) => [x, null]);
    const length = itemsArray.length;
    let rows = Math.ceil(Math.sqrt(length));
    let cols = Math.ceil(length / rows);

    if (rows % 2 !== 0) rows++;
    if (cols % 2 !== 0) cols++;

    const matrix: (T | null)[][] = [];
    let index = 0;
    let isLastItemNull = false;
    const filteredItemsArray = itemsArray.filter((x) => x !== null);

    for (let i = 0; i < rows; i++) {
        const row: (T | null)[] = [];
        if (i % 2 !== 0) {
            row.push(null);
            isLastItemNull = true;
        }

        for (let j = 0; j < cols; j++) {
            if (index < length) {
                const item = itemsArray[index] as T | null;
                row.push(item);
                isLastItemNull = item === null;
                index++;
            } else {
                if (!isLastItemNull) {
                    row.push(null);
                    isLastItemNull = true;
                } else {
                    const nextItem = filteredItemsArray[(i * cols + j) % filteredItemsArray.length];
                    row.push(nextItem as T);
                    isLastItemNull = false;
                }
            }
        }
        matrix.push(row);
    }
    return matrix;
}

export function getMatrixItem<T>(matrix: T[][], row: number, col: number): T {
    const firstRow = matrix[0];
    if (!firstRow) throw new Error('Matrix is empty');
    const numRows = matrix.length;
    const numCols = firstRow.length;
    const wrappedRow = wrap(0, numRows, row);
    const wrappedCol = wrap(0, numCols, col);
    return matrix[wrappedRow]?.[wrappedCol] as T;
}

export function isPointInsideBounds(point: Point, bounds: Bounds) {
    return (
        point.x >= bounds.left &&
        point.x <= bounds.right &&
        point.y >= bounds.top &&
        point.y <= bounds.bottom
    );
}

export function getItemDistanceFromContainer(
    itemCenterPoint: Point,
    itemWidth: number,
    itemHeight: number,
    bounds: Bounds
) {
    let distanceX = 0;
    let distanceY = 0;

    if (itemCenterPoint.x < bounds.left - itemWidth) {
        distanceX = bounds.left - itemWidth - itemCenterPoint.x;
    } else if (itemCenterPoint.x > bounds.right + itemWidth) {
        distanceX = itemCenterPoint.x - (bounds.right + itemWidth);
    }

    if (itemCenterPoint.y < bounds.top - itemHeight) {
        distanceY = bounds.top - itemHeight - itemCenterPoint.y;
    } else if (itemCenterPoint.y > bounds.bottom + itemHeight) {
        distanceY = itemCenterPoint.y - (bounds.bottom + itemHeight);
    }

    return Math.floor(Math.hypot(distanceX, distanceY));
}
