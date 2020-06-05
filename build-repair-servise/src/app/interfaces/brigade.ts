import {Comment} from "./comment";

export interface Brigade {
    name: string                 // название бригады
    specification: Array<string> // массив предоставляемых услуг
    description?: string         // дополнительное описание
    rating: number               // рейтинг бригады на сайте
    id?: number                  // идентификационный номер бригады
    reviews?: Array<Comment>     // массив отзывов пользователей
}
