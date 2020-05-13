import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() time: string;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
