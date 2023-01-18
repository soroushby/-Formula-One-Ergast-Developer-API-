import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BehaviorSubject, Observable, filter, map, switchMap, tap } from 'rxjs';
import { Season } from '../interfaces/season';
import { DateRange } from '@angular/material/datepicker';
import { Driver } from '../interfaces/driver';
import { Standings } from '../interfaces/standings';

@Component({
  selector: 'app-formula-one',
  templateUrl: './formula-one.component.html',
  styleUrls: ['./formula-one.component.scss'],
})
export class FormulaOneComponent {
  private selectedSeasonSubject = new BehaviorSubject([]);
  private raceRoundSubject = new BehaviorSubject([]);
  selectedSeason$ = this.selectedSeasonSubject.asObservable();
  raceRound$ = this.raceRoundSubject.asObservable();

  seasonsList$: Observable<Season[]> = this.dataService.getAllSeasons();
  drivers$: Observable<Driver[]> | undefined;
  raceResults$!: Observable<any>;
  standings$: Observable<Standings> | undefined;
  qualifyingResults$: Observable<any> | undefined;
  raceSelected$: Observable<any> | undefined;

  selectedYear: any;

  constructor(private dataService: DataService) {}

  onSeasonChange(ob: any) {
    // console.log('Season changed ..');
    this.selectedSeasonSubject.next(ob.value);

    this.drivers$ = this.selectedSeason$.pipe(
      switchMap((season) => this.dataService.getDrivers(season))
    );

    this.raceResults$ = this.selectedSeason$.pipe(
      switchMap((season) => this.dataService.getRaceResults(season))
    );

    this.selectedSeason$.subscribe((x) => (this.selectedYear = x));
  }

  onRaceChange(ob: any) {
    let searchedRace = ob.value;
    this.raceRoundSubject.next(searchedRace);

    this.raceSelected$ = this.dataService.getAllRaceResults(
      this.selectedYear,
      searchedRace
    );

    this.standings$ = this.selectedSeason$.pipe(
      switchMap((season) =>
        this.dataService.getStandings(this.selectedYear, searchedRace)
      )
    );

    this.qualifyingResults$ = this.selectedSeason$.pipe(
      switchMap((season) =>
        this.dataService.getQualifyingResults(this.selectedYear, searchedRace)
      )
    );
  }
}
