export declare enum Color {
    Red = "#E76F51",
    Blue = "#3A86FF",
    Green = "#2A9D8F",
    Yellow = "#E9C46A",
    Orange = "#F4A261",
    Pink = "#F15BB5"
}
export declare const colors: Color[];
export declare type Tile = {
    color: Color;
    row: number;
    column: number;
};
export declare type Board = {
    tiles: Tile[][];
    colors: Color[];
};
