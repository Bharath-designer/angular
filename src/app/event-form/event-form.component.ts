import { Component } from '@angular/core';

import { Form } from '../form';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  gender = ['Male', 'Female'];

  college = ['Within BIT', 'Outside Bit'];

  event = ['Coding', 'Hackathon', 'Paper presentation', 'Web design', 'Drawing', 'Project presentation']

  model = new Form('', '', '', '', '' );

  submitted = false;

  newEvent(){
    this.model = new Form('', '', '', '', '')
  }

  onSubmit() { this.submitted = true; }

}
