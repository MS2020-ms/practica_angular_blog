import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private arrPosts: Post[];
  categorias: string[];

  constructor() {

    this.arrPosts = [
      {
        titulo: 'De Cafes por Berlin',
        texto: 'Berlín tiene infinidad de cafeterías para todos los gustos. Cada una de ellas se puede decir que tiene una personalidad diferente, con una temática, decoración y ambiente muy especiales, tanto que algunas, a veces, pueden rozar lo ‘raro’.',
        autor: 'Hanna Müller',
        imagen: './assets/images/cafe-berlin.jpg',
        fecha: new Date(),
        categoria: 'viaje'
      },
      {
        titulo: 'European Month of Photography',
        texto: 'EMOP se celebra su edicion en Berlin del 1 al 31 de octubre de 2020. Es el mayor festival de fotografía en Alemania. Desde 2004, se lleva a cabo cada dos años en Berlín, presentando una amplia gama de exposiciones y eventos sobre fotografía histórica y contemporánea.',
        autor: 'Martirio Galan',
        imagen: './assets/images/camara-fotos.jpg',
        fecha: new Date(),
        categoria: 'cultura'
      },
      {
        titulo: '5 Lagos imprescindibles',
        texto: 'Pasar el día en alguno de los numerosos lagos que hay en Berlín es la opción perfecta para los días calurosos del verano. Y es que, vaya uno en la dirección que vaya, en Berlín es fácil encontrarse con el agua. Cientos de lagos, además de ríos y canales, están presentes en Berlín y en la cercana región de Brandeburgo.',
        autor: 'Juan Tormento',
        imagen: './assets/images/lago-berlin.jpg',
        fecha: new Date(),
        categoria: 'ocio'
      },
    ];

    this.categorias = ['cultura', 'ocio', 'estilo', 'gastro', 'viaje'];

    if (localStorage.getItem('nuevoPost')) {
      this.arrPosts = JSON.parse(localStorage.getItem('nuevoPost'));
    }
    //Si el arrPosts comenzara vacio:
    //else {this.arrPosts = [];}

  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });
  }

  getCategoriasSelect() {
    let elements = [];
    for (let categoria of this.categorias) {
      elements.push({ nombre: categoria, num: this.getNumPostByCategoria(categoria) });
    }
    return elements;
  }

  getNumPostByCategoria(pCategoria) {
    let num = 0;
    for (let post of this.arrPosts) {
      if (post.categoria === pCategoria) num++;
    }
    return num;
  }

  getPostsByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = this.arrPosts.filter(post => {
        return post.categoria === pCategoria;
      });
      resolve(arrFiltrado);
    });
  }

  /*getCategoriaSinRepetir(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const todasCategorias = this.arrPosts.map(post => post.categoria);
      const categoriasSinRepetir = [...new Set(todasCategorias)];
      resolve(categoriasSinRepetir);
    })
  }*/

  getAutoresSinRepetir(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const todosAutores = this.arrPosts.map(post => post.autor);
      const autoresSinRepetir = [...new Set(todosAutores)];
      resolve(autoresSinRepetir);
    })
  }

  agregarPost(pPost: Post): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPosts.push(pPost);
      localStorage.setItem('nuevoPost', JSON.stringify(this.arrPosts))
      resolve(this.arrPosts);
    });
  }

  borrarPost(pIndice: number) {
    this.arrPosts.splice(pIndice, 1);
    localStorage.setItem('nuevoPost', JSON.stringify(this.arrPosts));
  }

}




