import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapaModalPage } from './mapa-modal.page';
import { Lugar } from 'src/app/models/Lugar';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

const routes: Routes = [
  { 
    path: '',
    component: MapaModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapaModalPage]
})
export class MapaModalPageModule {}
