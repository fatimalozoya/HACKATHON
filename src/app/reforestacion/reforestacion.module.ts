import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReforestacionPage } from './reforestacion.page';

const routes: Routes = [
  {
    path: '',
    component: ReforestacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReforestacionPage
      }
    ])
  ],
  declarations: [ReforestacionPage]
})
export class ReforestacionPageModule {}
