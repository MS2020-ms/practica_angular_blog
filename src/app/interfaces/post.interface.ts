
/*  export enum Categoria {
  estilo,
  gastro,
  viaje,
  cultura,
  ocio
  } */

export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: string;
}