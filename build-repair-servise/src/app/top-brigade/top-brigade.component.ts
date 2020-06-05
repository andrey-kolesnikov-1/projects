import {Component, OnInit, Input} from '@angular/core';
import {Brigade} from '../interfaces/brigade';
import {DataServiseService} from '../servises/data-servise.service';


@Component({
  selector: 'app-top-brigade',
  templateUrl: './top-brigade.component.html',
  styleUrls: ['./top-brigade.component.css']
})
export class TopBrigadeComponent implements OnInit {

  brigade: Brigade[] = [];

  constructor(private data: DataServiseService) {
  }

  ngOnInit(): void {
    this.data.getTopBrigade().subscribe((br) => {
      this.brigade = br
    });
    this.data._getTopBrigade();
  }

}
