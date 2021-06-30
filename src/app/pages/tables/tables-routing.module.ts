import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TablesPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: TablesPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TablesRoutingModule {
}
