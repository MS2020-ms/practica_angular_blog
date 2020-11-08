import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPostsRecibidos: Post[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {

    this.blogService.getAllPosts()
      .then(posts => {
        this.arrPostsRecibidos = posts;
      })
      .catch(error => console.log(error));
  }

  async onChange($event) {
    if ($event.target.value === 'todos') {
      this.arrPostsRecibidos = await this.blogService.getAllPosts();
    } else {
      this.arrPostsRecibidos = await this.blogService.getPostsByCategoria($event.target.value);
    }
  }

  onClickBorrar(pIndice: number) {
    this.blogService.borrarPost(pIndice);
  }

}
