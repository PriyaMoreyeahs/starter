import { Component } from '@angular/core';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent {
  rows = [
    {id: 1, desc: "foo", showDetail: false},
    {id: 2, desc: "bar", showDetail: false},
  ]
}
