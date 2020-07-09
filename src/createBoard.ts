import { Board, Tile, colors } from "./types";

import { createEmptyArray } from "./utils/arrays";
import { randomItem } from "./utils/random";

export const createBoard = (size: number, numberOfColors: number): Board => {
    if (numberOfColors > colors.length) {
        console.warn(
            `Requested number of colors(${numberOfColors}) greater than preset colors(${colors.length})`
        );
    }

    // The colorsToUse array will be of length less than or equal to numberOfColors
    const colorsToUse = colors.slice(0, numberOfColors);

    const originColor = randomItem(colorsToUse);
    const nonOriginColors = colorsToUse.filter((c) => c !== originColor);

    return {
        tiles: createEmptyArray(size).map((_, i) => {
            return createEmptyArray(size).map((_, j) => {
                const isOrigin = i === 0 && j === 0;
                const isAdjacentToOrigin =
                    (i === 1 && j === 0) || (i === 0 && j === 1);

                return {
                    color: isOrigin
                        ? originColor
                        : isAdjacentToOrigin
                        ? randomItem(nonOriginColors)
                        : randomItem(colorsToUse),
                    column: j,
                    row: i,
                } as Tile;
            });
        }),
        colors: colorsToUse,
    };
};
