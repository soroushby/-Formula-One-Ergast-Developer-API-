import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, observable, shareReplay, tap } from 'rxjs';
import { Season } from '../interfaces/season';
import { Driver } from '../interfaces/driver';
import { Standings } from '../interfaces/standings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllSeasons(): Observable<Season[]> {
    return this.http
      .get<any>('http://ergast.com/api/f1/seasons.json?limit=505?callback')
      .pipe(
        map((data) => data['MRData']['SeasonTable']['Seasons']),
        map((data) => data.filter((data: any) => data.season >= '2018')),
        shareReplay()
      );
  }

  getDrivers(season: any): Observable<Driver[]> {
    return this.http
      .get<any>(`http://ergast.com/api/f1/${season}/drivers.json?callback`)
      .pipe(
        map((data) => data['MRData']['DriverTable']['Drivers']),
        shareReplay()
      );
  }

  getRaceResults(season: any) {
    return this.http
      .get<any>(`http://ergast.com/api/f1/${season}/results.json?callback`)
      .pipe(
        map((data) => data['MRData']['RaceTable']['Races']),
        shareReplay()
      );
  }

  getAllRaceResults(season: any, round: any) {
    return this.http
      .get<any>(
        `http://ergast.com/api/f1/${season}/${round}/results.json?callback`
      )
      .pipe(
        map((data) => data['MRData']['RaceTable']),
        shareReplay()
      );
  }

  getStandings(season: any, round: any): Observable<Standings> {
    return this.http
      .get<any>(
        `http://ergast.com/api/f1/${season}/${round}/driverStandings.json?callback`
      )
      .pipe(
        map(
          (data) =>
            data['MRData']['StandingsTable']['StandingsLists'][0][
              'DriverStandings'
            ]
        ),
        shareReplay()
      );
  }

  getQualifyingResults(season: any, round: any): Observable<Standings> {
    return this.http
      .get<any>(
        `http://ergast.com/api/f1/${season}/${round}/qualifying.json?callback`
      )
      .pipe(
        map(
          (data) => data['MRData']['RaceTable']['Races'][0]['QualifyingResults']
        ),
        shareReplay()
      );
  }
}
