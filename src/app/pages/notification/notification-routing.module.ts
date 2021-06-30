import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotificationPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: NotificationPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class NotificationRoutingModule {
}
