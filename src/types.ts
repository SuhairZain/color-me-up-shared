export enum Color {
    Red = "#E76F51",
    Blue = "#3A86FF",
    Green = "#2A9D8F",
    Yellow = "#E9C46A",
    Orange = "#F4A261",
    Pink = "#F15BB5",
}

export type Tile = {
    color: Color;
    row: number;
    column: number;
};

export type Board = {
    tiles: Tile[][];
    colors: Color[];
};
