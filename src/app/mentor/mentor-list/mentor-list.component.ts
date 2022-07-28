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

  public object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor() {
    this.name = 'vyom';
    this.userList = [
      {
        name: 'User one',
        age: 22,
        gender: 'Male',
        date: '6/15/15, 9:03 AM',
        amount: '100.000'
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
