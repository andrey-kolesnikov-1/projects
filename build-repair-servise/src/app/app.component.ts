import { Component } from '@angular/core';

export interface Brigade {
  name: string
  specification: string
  rating: number
  id?: number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'build-repair-servise';

  brigade: Brigade[] = [
    {name: 'Вася и перфоратор', specification: 'всё', rating: 50},
    {name: 'Петя & Co', specification: 'внутрение работы', rating: 70},
    {name: 'fghb & Co', specification: 'ебашим всё что под руки попадается', rating: 30},
    {name: 'Ебаj.;kl/ш & Co', specification: 'ебашим всё что под руки попадается', rating: 35},
    {name: 'Ебwdfefаш & Co', specification: 'ебашим всё что под руки попадается', rating: 0},
    {name: 'Еба53453ш & Co', specification: 'ебашим всё что под руки попадается', rating: 90},
  ];



}
