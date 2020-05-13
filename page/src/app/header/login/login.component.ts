import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  textValue: string;
  text: string = 'Войдите под своим логином';
  flagLog: boolean = true;
  initValue: string = '';
  login: string = 'a';
  constructor() { }

  ngOnInit(): void {
  }

  validation() {
    this.textValue === this.login ? 
    (this.text = `Приветствуем тебя ${this.textValue}`, this.flagLog = false) : 
    (this.text = `Логин неверный! Повторите попытку.`,
    setTimeout(() => {
      this.text = `Войдите под своим логином`;
    }, 3000)
    );
  }
  exitUser() {
    this.text= 'Войдите под своим логином';
    this.flagLog = true;
    this.textValue = '';
  }


}
