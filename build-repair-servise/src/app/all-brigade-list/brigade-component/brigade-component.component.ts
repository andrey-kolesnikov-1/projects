import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../interfaces/comment";
import {Brigade} from "../../interfaces/brigade";

@Component({
  selector: 'app-brigade-component',
  templateUrl: './brigade-component.component.html',
  styleUrls: ['./brigade-component.component.css']
})
export class BrigadeComponentComponent implements OnInit {

  @Input() brigade: Brigade;

  nameBrigade: string;          // название бригады
  specification: Array<string>; // массив предоставляемых услуг
  description: string;          // дополнительное описание
  rating: number;               // рейтинг бригады на сайте
  id: number;                   // идентификационный номер бригады
  reviews: Array<Comment>;      // массив отзывов пользователей

  constructor() { }

  ngOnInit(): void {
  }

}
