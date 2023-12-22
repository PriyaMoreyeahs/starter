import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-expense',
  templateUrl: './project-expense.component.html',
  styleUrls: ['./project-expense.component.scss']
})
export class ProjectExpenseComponent {
  @Input() item: number;
}
