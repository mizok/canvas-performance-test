import { CtxRendering } from 'mkcvs';
export declare class A extends CtxRendering {
    private ctx;
    private cvs;
    private loc;
    private layer;
    constructor(layer: any);
    init(): void;
    draw(): void;
}
export declare class B {
    private cvs;
    private ctx;
    private loc;
    constructor(cvs: HTMLCanvasElement);
    init(): void;
    resize(): void;
    draw(): void;
}
