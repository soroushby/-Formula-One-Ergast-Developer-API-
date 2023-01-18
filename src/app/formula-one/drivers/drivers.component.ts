import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  @Input() dataSource: any;

  displayedColumns: string[] = [
    'driverId',
    'firstName',
    'lastName',
    'nationality',
    'dateOfBirth',
    'permanentNumber',
  ];
}
