import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {
  public title: string;

  formData = {
    username: '',
    password: ''
  }
  router: any;
  authService: any;

  constructor() { 
    this.title = 'Witaj na stronie logowania'
  }

  ngOnInit(): void {
  }

  logowanie() {
    if(this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log('Zalogowano pomyślnie');
    } else {
      console.log('Błąd logowanie. Sprawdź dane.');


    }
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
