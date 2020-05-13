import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string;
  text: string;
  @Output() post = new EventEmitter<Post>();
  @Output() flagDelete = new EventEmitter<boolean>();
  @ViewChild('titleInput') titleInp: ElementRef;
  @ViewChild('titleText') titleText: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  newPost() {
    if (this.text !== undefined && this.title !== undefined && this.text !== '' && this.title !== '') {
      this.post.emit({title: this.title, text: this.text});
      this.clrInput();
    } else {
      this.titleInp.nativeElement.style.backgroundColor = 'red';
      this.titleText.nativeElement.style.backgroundColor = 'red';
      setTimeout(() => {
        this.titleInp.nativeElement.style.backgroundColor = 'white';
        this.titleText.nativeElement.style.backgroundColor = 'white';
      }, 2000)
    }
  }

  clrInput() {
    this.text = this.title = '';
  }

  deletePost() {
    this.flagDelete.emit();
  }
}
