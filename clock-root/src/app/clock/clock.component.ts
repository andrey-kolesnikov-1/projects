import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: any = new Date().toLocaleTimeString();
  r: number = Math.floor(255 * Math.random());
  g: number = Math.floor(255 * Math.random());
  b: number = Math.floor(255 * Math.random());
  incDecR = {flag: Math.random() > 0.5? true : false};
  incDecG = {flag: Math.random() > 0.5? true : false};
  incDecB = {flag: Math.random() > 0.5? true : false};
  color: string = `rgb(${this.r}, ${this.g}, ${this.b})`;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      this.r = this.changeRGB(this.r, this.incDecR);
      this.g = this.changeRGB(this.g, this.incDecG);
      this.b = this.changeRGB(this.b, this.incDecB);
      this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
    }, 1000);
  }

  changeRGB(rgb: number, obj): number {
    if (obj.flag) {
      rgb >= 255 ? obj.flag = !obj.flag : rgb++;
    } else {
      rgb <= 0 ? obj.flag = !obj.flag : rgb--;
    }
    return rgb;
  }



}
