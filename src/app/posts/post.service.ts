import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({providedIn: 'root'}) //serve a creare una sola instanza dei post per l'intera app
export class PostService{
  private posts: Post[] = [] ;

  getPosts(){
    return [...this.posts]; //ritorna un array che contiene i dati dell'array puntato da this.post (puntatore), in questo modo se si modifica il nuovo array, quello vecchio resta immutato
  }
  addPosts(title: string, content: string){
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);

  }
}
