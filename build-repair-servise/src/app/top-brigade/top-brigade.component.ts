import { Component, OnInit, Input } from '@angular/core';
import { Brigade } from '../app.component';


@Component({
  selector: 'app-top-brigade',
  templateUrl: './top-brigade.component.html',
  styleUrls: ['./top-brigade.component.css']
})
export class TopBrigadeComponent implements OnInit {

  brigade: Brigade[] = [];

  @Input()
  set topBrigade(brigade: Brigade[]) {
    if (brigade.length === 0) {
      this.brigade.push({ name: 'Нет данных', specification: 'Нет данных', rating: 0, id: -1 })
    } else {
      this.brigade = brigade.slice(); // копируем массив
      this.brigade.sort((a, b) => b.rating - a.rating); // сортируем по рейтингу
      this.brigade.splice(3); // оставляем первые три объекта
    }

  }




  constructor() { }

  ngOnInit(): void {
  }

}
