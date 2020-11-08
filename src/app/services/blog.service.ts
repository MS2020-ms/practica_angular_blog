import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private arrPosts: Post[];

  constructor() {

    this.arrPosts = [
      {
        titulo: 'Cafe en Berlin',
        texto: 'Berlín tiene infinidad de cafeterías para todos los gustos. Cada una de ellas se puede decir que tiene una personalidad diferente, con una temática, decoración y ambiente muy especiales, tanto que algunas, a veces, pueden rozar lo ‘raro’.',
        autor: 'Mario Norig',
        imagen: './assets/images/cafe-berlin.jpg',
        fecha: new Date(),
        categoria: 'viaje'
      },
      {
        titulo: 'MadridDocuFest 2020',
        texto: 'Llega a Madrid la primera edición del festival MadridDocuFest. Un festival de fotografía y multimedia documental que pretende dar protagonismo al fotoperiodismo y la fotografía documental durante los meses de octubre y noviembre en Madrid. Estas dos exposiciones nos muestran el fotoperiodismo que se hace desde nuestro país y dan la oportunidad al público de conocer y profundizar en sus trabajos.',
        autor: 'Martirio Golem',
        imagen: './assets/images/camara-fotos.jpg',
        fecha: new Date(),
        categoria: 'cultura'
      },
    ];
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });
  }

  getPostsByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = this.arrPosts.filter(post => {
        return post.categoria === pCategoria;
      });
      resolve(arrFiltrado);
    });
  }

  /*
  getCategoria(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const todasCategorias = this.arrPosts.map(post => post.categoria);
      const postSinRepetir = [...new Set(todasCategorias)];
      resolve(postSinRepetir);
    })
  }*/

  agregarPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pPost);
      resolve(this.arrPosts);
    });
  }

}

