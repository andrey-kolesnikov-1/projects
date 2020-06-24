import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-clock-v2',
  templateUrl: './clock-v2.component.html',
  styleUrls: ['./clock-v2.component.css']
})
export class ClockV2Component implements OnInit {
  rotateSec_: string;
  rotateMin_: string;
  rotateHour_: string;
  oldSec: number = 0; // хранение старого значения времени
  oldMin: number = 0;
  oldHour: number = 0;
  flagSec: boolean = true;
  timerSec: any;
  stepSec: number = 2;


  @Input()
  public set rotateSec(v: number) {
    v == undefined ? v = 0 : v = v;
    let currValue: number = (v * 360) / 60; // расчет градуса поворота стрелки

    if (this.oldSec !== currValue) {
      if (this.flagSec) {
        this.flagSec = false;
        this.timerSec = setInterval(() => {
          this.oldSec < 360 ? this.oldSec += this.stepSec : this.oldSec = 0;
          this.rotateSec_ = `rotate(${this.oldSec}deg)`; // вывод результата
          Math.trunc(this.oldSec) === currValue ? (clearInterval(this.timerSec), this.flagSec = true, this.stepSec = 0.2) : this.oldSec;
        }, 10);
      }
    } else {
      this.oldSec = currValue;
      this.rotateSec_ = `rotate(${currValue}deg)`; // вывод результата
    }
  }

  @Input()
  public set rotateMin(v: number) {
    this.rotateMin_ = `rotate(${(v * 360) / 3600}deg)`;
  }

  @Input()
  public set rotateHour(v: number) {
    this.rotateHour_ = `rotate(${(v * 360) / 43200}deg)`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
