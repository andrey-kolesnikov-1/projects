import { Injectable } from '@angular/core';
import { Brigade } from '../interfaces/brigade';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiseService {

  private brigade: Brigade[] = []; // массив всех зарегестрированных бригад
  private topBrigade: Brigade[] = []; // массив лучших по рейтингу бригад
  private id: number = 0; // идентификатор вносимых в список бригад (инкрементируется с каждым добавлением бригады)
  private streamTopBrigade$ = new Subject<any>(); // стрим топовых бригад
  private streamBrigade$ = new Subject<any>(); // стрим всех бригад

  constructor() { }

  // добавление новых бригад в начало или конец массива
  addBrigade(brigade: Brigade, position?: string) {
    brigade.id = this.id++;
    position === 'first' ? this.brigade.unshift(brigade) : this.brigade.push(brigade);
    this.streamBrigade$.next(this.brigade); // обновление списка бригад для подписавшихся на стрим
    this._getTopBrigade(); // обновление списка лучших бригад
  }

  // удаление бригады из начала или из конца массива
  deleteBrigade(position: string) {
    position === 'first' ? this.brigade.shift() : this.brigade.pop();
    this.updateStreams(); // бросаем события в стримы
  }

  // удаление бригады по её ID
  deleteByID(id: number) {
    this.brigade.forEach((value, index) => {
      if(value.id === id) {
        this.brigade.splice(index, 1);
      }
    })
    this.updateStreams(); // бросаем события в стримы
  }

  private updateStreams() {
    this.streamBrigade$.next(this.brigade); // обновление списка бригад для подписавшихся на стрим
    this._getTopBrigade(); // обновление списка лучших бригад
  }

   _getTopBrigade() {
    if (this.brigade.length === 0) {
      this.topBrigade.pop();
      this.topBrigade.push({ name: 'Нет данных', specification: ['Нет данных'], rating: 0, id: -1 });
    } else {
      this.topBrigade = this.brigade.slice(); // копируем массив
      this.topBrigade.sort((a, b) => b.rating - a.rating); // сортируем по рейтингу
      this.topBrigade.splice(3); // оставляем первые три объекта
    }
    this.streamTopBrigade$.next(this.topBrigade);
  }

  // получение стрима всех бригад для подписки
  getBrigade(): Subject<any> {
    return this.streamBrigade$;
  }

  // получение стрима лучших бригад для подписки
  getTopBrigade(): Subject<any> {
    return this.streamTopBrigade$;
  }

}
