import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../interfaces/comment";
import { Brigade } from '../../interfaces/brigade';

@Component({
  selector: 'app-brigade-component',
  templateUrl: './brigade-component.component.html',
  styleUrls: ['./brigade-component.component.css']
})
export class BrigadeComponentComponent implements OnInit {

  @Input() brigade: Brigade;

  constructor() { }

  ngOnInit(): void {
  }

}
