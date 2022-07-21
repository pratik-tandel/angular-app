import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
  public name: string;
  public imgSrc: string = "example.com";

  public userList;
  public isAddMode: boolean = true;

  constructor() {
    this.name = 'vyom';
    this.userList = [
      {
        name: 'User 1',
        age: 22,
        gender: 'Male'
      },
      {
        name: 'User 2',
        age: 23,
        gender: 'Male'
      },
      {
        name: 'User 3',
        age: 24,
        gender: 'Female'
      },
      {
        name: 'User 4',
        age: 25,
        gender: 'Female'
      }
    ];
  }

  ngOnInit(): void {
  }

  onClick = () => {
    console.log("button clicked")
  }

}
