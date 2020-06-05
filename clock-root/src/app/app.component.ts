import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clock-root';

  // управление аналоговыми часами
  second: number;
  minut: number;
  hour: number;

  ngOnInit(): void {
    this.analogTime(); // работа аналоговых часов
  }

  analogTime() {
    setInterval(() => {
      let time = new Date();
      this.second = time.getSeconds();
      this.minut = (time.getMinutes() * 60) + time.getSeconds();
      this.hour = (time.getHours() * 3600) + (time.getMinutes() * 60) + time.getSeconds();
    }, 1000);
  }
}
