import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Заголовок';
  currentTime:string;
  currentDate: string;

  constructor() { }

  ngOnInit(): void {
    this.getCurrDate();
  }

  getCurrDate() {
    setInterval(() => {
      let date = new Date();
      this.currentTime = date.toLocaleTimeString();
      this.currentDate = date.toLocaleDateString();
    }, 1000);
  }

}
