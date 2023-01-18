import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qualify-results',
  templateUrl: './qualify-results.component.html',
  styleUrls: ['./qualify-results.component.scss'],
})
export class QualifyResultsComponent {
  @Input() dataSource: any;

  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'q1',
    'q2',
    'q3',
  ];
}
