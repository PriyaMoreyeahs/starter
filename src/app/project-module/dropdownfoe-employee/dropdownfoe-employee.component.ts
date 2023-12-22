import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownfoeEmployeeComponent),
  multi: true,
};

@Component({
  selector: 'app-dropdownfoe-employee',
  templateUrl: './dropdownfoe-employee.component.html',
  styleUrls: ['./dropdownfoe-employee.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class DropdownfoeEmployeeComponent {

}
