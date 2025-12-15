import type Point from "./Point.model";

export default interface ServiceCard{
    id: number,
    bgImage?: string,
    title?: string,
    points?: Point[],
    text?: string
}