import { Component, OnInit } from '@angular/core';
import { DataServiseService } from './servises/data-servise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'build-repair-servise';

  constructor(private dataBrigade: DataServiseService) {
  }

  ngOnInit() {
  }

  addBrig() {
    this.dataBrigade.addBrigade({
      name: 'Вася и перфоратор',
      specification: ['всё', 'dsggv', 'iwuehfuwe'],
      rating: 50,
      reviews: [{
        userName: 'Vasya',
        feedback: 'жопа'
      }]
    });
  }

}
