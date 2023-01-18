import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() dataSource: any;
  source: any;
  finished: any;
  oneLap: any;
  accident: any;

  ngOnInit(): void {
    this.source = this.dataSource.Races[0].Results;
    this.finished = this.source.filter(
      (data: any) => data.status == 'Finished'
    );

    this.oneLap = this.source.filter((data: any) => data.status == '+1 Lap');

    this.accident = this.source.filter(
      (data: any) => data.status == 'Accident'
    );
  }

  displayedColumns: string[] = [
    'position',
    'firstName',
    'lastName',
    'wins',
    'points',
    'laps',
    'nationality',
    'status',
  ];
}
