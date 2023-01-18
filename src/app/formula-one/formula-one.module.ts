import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaOneRoutingModule } from './formula-one-routing.module';
import { FormulaOneComponent } from './formula-one.component';
import { MaterialModule } from '../shared/material/material.module';
import { DriversComponent } from './drivers/drivers.component';
import { ResultsComponent } from './results/results.component';
import { StandingsComponent } from './standings/standings.component';
import { QualifyResultsComponent } from './qualify-results/qualify-results.component';

@NgModule({
  declarations: [FormulaOneComponent, DriversComponent, ResultsComponent, StandingsComponent, QualifyResultsComponent],
  imports: [CommonModule, FormulaOneRoutingModule, MaterialModule],
})
export class FormulaOneModule {}
