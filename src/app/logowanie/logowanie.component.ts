import { Component } from "@angular/core";




@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {
  formData = {
    username: '', // Corrected property name
    password: ''
  };

  logowanie() {
    if (this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log('Zalogowano pomyślnie'); // Corrected Polish characters
    } else {
      console.log('Błąd logowania. Sprawdź dane'); // Corrected Polish characters
    }
  }
}
