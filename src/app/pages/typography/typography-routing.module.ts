import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TypographyPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: TypographyPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TypographyRoutingModule {
}
