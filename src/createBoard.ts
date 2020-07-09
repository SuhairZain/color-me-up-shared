import { Board, Color, Tile } from "./types";

import { createEmptyArray } from "./utils/arrays";

export const createBoard = (size: number): Board => {
    return {
        tiles: createEmptyArray(size).map((_, i) => {
            return createEmptyArray(size).map((_, j) => {
                return {
                    color: Color.Blue,
                    column: j,
                    row: i,
                } as Tile;
            });
        }),
        colors: [Color.Blue],
    };
};
