import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IconsPageComponent } from './components';
import { ChartsPageComponent, MapPageComponent } from './containers';

const routes: Routes = [
  {
    path: 'icons',
    component: IconsPageComponent
  },
  {
    path: 'charts',
    component: ChartsPageComponent
  },
  {
    path: 'map',
    component: MapPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UiElementsRoutingModule {
}
