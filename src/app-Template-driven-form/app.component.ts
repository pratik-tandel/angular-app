import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template-Driven-Form-Example';

  public userModel = new User();

  charPattern = '^[a-zA-Z]+$';
  pattern = "^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$"

  constructor() {

  }

  onFirstName(firstName) {
    console.log(firstName);
    debugger
  }

  onSubmit(usreForm) {
    console.log(usreForm.form.value);
  }
}
