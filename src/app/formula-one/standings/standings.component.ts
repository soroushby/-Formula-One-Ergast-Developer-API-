import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent {
  @Input() dataSource: any;

  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'wins',
    'points',
    'nationality',
  ];
}
