import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({providedIn: 'root'}) //serve a creare una sola instanza dei post per l'intera app
export class PostService{
  private posts: Post[] = [] ;
  private postsUpdated = new Subject<Post[]>();


  getPosts(){
    return [...this.posts]; //ritorna un array che contiene i dati dell'array puntato da this.post (puntatore), in questo modo se si modifica il nuovo array, quello vecchio resta immutato
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }
  addPost(title: string, content: string){
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);

  }
}
