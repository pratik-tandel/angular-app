import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.css']
})
export class MentorFormComponent implements OnInit {

  public isSpecial = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
