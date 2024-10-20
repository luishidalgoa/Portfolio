import { Technologies } from "../../core/models/enum/technologies"

export interface Proyect {
    title:string;
    description:string;
    articleUrl: string;
    imageUrl: string;
    tags:Technologies[];
    degree?:string,
    type: 'FullStack' | 'FrontEnd' | 'BackEnd' | 'Big Data'
}
