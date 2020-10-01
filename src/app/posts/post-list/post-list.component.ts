import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // posts = [
  //   {title: "First Post", content: "This is the first post\'s content"},
  //   {title: "Second Post", content: "This is the second post\'s content"},
  //   {title: "First Post", content: "This is the third post\'s content"}
  // ];
 @Input() posts = []; //No posts added yet

}
