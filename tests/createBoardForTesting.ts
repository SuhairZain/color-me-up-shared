import { Color } from "../src/types";

export const createBoardForTesting = () => {
    return {
        colors: [Color.Blue, Color.Green, Color.Red, Color.Pink, Color.Yellow],
        tiles: [
            [Color.Blue, Color.Red, Color.Yellow, Color.Red],
            [Color.Green, Color.Yellow, Color.Red, Color.Pink],
            [Color.Yellow, Color.Yellow, Color.Yellow, Color.Yellow],
            [Color.Yellow, Color.Blue, Color.Yellow, Color.Green],
        ].map((row, i) => {
            return row.map((color, j) => ({
                color,
                column: j,
                row: i,
            }));
        }),
    };
};
