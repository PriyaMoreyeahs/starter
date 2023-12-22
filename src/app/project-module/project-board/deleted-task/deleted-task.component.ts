import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deleted-task',
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.scss']
})
export class DeletedTaskComponent {
  @Input() item: number;
}
