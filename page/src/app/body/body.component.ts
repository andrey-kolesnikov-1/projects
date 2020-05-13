import { Component, OnInit } from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  post: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  setNewPost(text) {
  this.post.unshift(text);
  }

  deletePost() {
    this.post.pop();
  }
}
