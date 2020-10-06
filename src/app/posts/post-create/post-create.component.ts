import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {



  ngOnInit() {
  }
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostService) {}

  onAddPost(form: NgForm){
    if (form.invalid) {
      return;
    }
    const post: Post = {
      id: form.value.id,
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPost( form.value.title, form.value.content);
    form.resetForm(); //fa il cleanup dopo l'invio
  }
}


