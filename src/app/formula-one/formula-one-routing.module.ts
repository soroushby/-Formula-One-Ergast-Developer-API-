import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaOneComponent } from './formula-one.component';

const routes: Routes = [{ path: '', component: FormulaOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaOneRoutingModule {}
