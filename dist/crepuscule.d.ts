import { Map } from "@maptiler/sdk";
export type Color = [number, number, number];
export type CrepusculeOptions = {
    color?: Color;
    opacity?: number;
    date?: Date;
    debug?: boolean;
};
export type TransitionOptions = {
    duration?: number;
    delay?: number;
};
export declare class Crepuscule {
    private map;
    private color;
    private opacity;
    private date;
    private unique;
    private protocolNamespace;
    private tileUriPattern;
    private layerId;
    private sourceId;
    private debug;
    private source;
    constructor(map: Map, options?: CrepusculeOptions);
    generateTilePixelOnWorker(x: number, y: number, z: number, timestamp: number): Promise<unknown>;
    init(): void;
    setOpacity(o: number, options?: TransitionOptions): void;
    hide(options?: TransitionOptions): void;
    show(options?: TransitionOptions): void;
    setDate(date: Date): void;
    update(): void;
}
export declare class CrepusculeLive {
    private opacity;
    private crA;
    private crB;
    private usingA;
    private intervalId;
    constructor(map: Map, options?: CrepusculeOptions);
    init(): void;
    start(): void;
    stop(): void;
    _update(): void;
}
