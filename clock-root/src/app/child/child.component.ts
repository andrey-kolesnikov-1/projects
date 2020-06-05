import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  hourHeight: string = '0px';
  hourTop: string = '200px';
  minutHeight: string = '0px';
  minutTop: string = '200px';
  secondHeight: string = '0px';
  secondTop: string = '200px';

  constructor() { }

  ngOnInit(): void {
    this.parseTime();
    setInterval(() => {
      this.parseTime();
    }, 1000);
  }

  parseTime() {
    let time = new Date();
    let hour: number = Math.floor((time.getHours() * 200) / 24);
    let minuts: number = Math.floor((time.getMinutes() * 200) / 60);
    let seconds: number = Math.floor((time.getSeconds() * 200) / 60);

    this.hourHeight = `${hour}px`;
    this.hourTop = `${200 - hour}px`;
    this.minutHeight = `${minuts}px`;
    this.minutTop = `${200 - minuts}px`;
    this.secondHeight = `${seconds}px`;
    this.secondTop = `${200 - seconds}px`;
  }


}
