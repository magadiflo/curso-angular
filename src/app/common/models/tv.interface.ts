import { ColorsTv, ResolutionsTv, SizesTv } from "./tv-type.interface";

export interface ITv {
    color: ColorsTv;
    rack: boolean;
    tamanio: SizesTv;
    resolution: ResolutionsTv;
}