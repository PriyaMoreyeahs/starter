import { Component } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent {
  rows = [
    {id: 1, desc: "foo", showDetail: false},
    {id: 2, desc: "bar", showDetail: false},
  ]
  id = "gsdfjhfue"
  Show:string
  count=1
  ShowHide(value: string, count: number) {
    if (this.Show == value) {
      this.Show = "";
    } else {
      if (count != 0) {
        this.Show = value;
      } else {
        // this.toster.error("No Task Found!");
      }
    }
  }
}
