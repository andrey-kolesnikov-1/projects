import { Component, OnInit } from '@angular/core';
import {DataServiseService} from "../servises/data-servise.service";
import {Brigade} from "../interfaces/brigade";

@Component({
  selector: 'app-all-brigade-list',
  templateUrl: './all-brigade-list.component.html',
  styleUrls: ['./all-brigade-list.component.css']
})
export class AllBrigadeListComponent implements OnInit {

  brigade: Brigade[] = [];

  constructor(private dataServise: DataServiseService) { }

  ngOnInit(): void {
    this.dataServise.getBrigade().subscribe((data) => {this.brigade = data})
  }

  selectBrigade(brig: Brigade) {
    console.log('id: ', brig.id);
    this.dataServise.deleteByID(brig.id);
  }
}
