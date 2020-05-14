import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-top-brigade',
  templateUrl: './list-top-brigade.component.html',
  styleUrls: ['./list-top-brigade.component.css']
})
export class ListTopBrigadeComponent implements OnInit {

  @Input() name: string; // название бригады
  @Input() specification: string; // спецификация работ
  @Input() rating: string; // рейтинг

  constructor() { }

  ngOnInit(): void {
  }

}
