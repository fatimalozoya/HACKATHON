import { Component, OnInit, Input } from '@angular/core';
import { Lugar } from 'src/app/models/Lugar';

@Component({
  selector: 'app-mapa-modal',
  templateUrl: './mapa-modal.page.html',
  styleUrls: ['./mapa-modal.page.scss'],
})
export class MapaModalPage implements OnInit {

  lat: number = 25.686613;
  lng: number = -100.316116;

  lugares: Lugar[] = []

  lugar1: Lugar;
  lugar2: Lugar;

  constructor() { 
    this.lugar1 = {
      nombre: "Greenpaper Monterrey",
      lat: -40.7133,
     lng: -154.4246,
     urlImagen: " ",
    descripcion: "Reciclaje de papel"

    }

   this.lugares.push(this.lugar1);

  
  }

  ngOnInit() {
    
  }

}
