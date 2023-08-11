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
    private wasUnmounted;
    constructor(map: Map, options?: CrepusculeOptions);
    private generateTilePixelOnWorker;
    private init;
    setOpacity(o: number, options?: TransitionOptions): void;
    hide(options?: TransitionOptions): void;
    show(options?: TransitionOptions): void;
    setDate(date: Date): void;
    update(): void;
    unmount(): void;
    private raiseIfUnmounted;
}
export declare class CrepusculeLive {
    private opacity;
    private crA;
    private crB;
    private usingA;
    private intervalId;
    private map;
    constructor(map: Map, options?: CrepusculeOptions);
    start(): void;
    stop(): void;
    _update(): void;
    unmount(): void;
}
