import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Lugar } from '../app/../models/Lugar';

import { ModalController } from '@ionic/angular';
import { MapaModalPage } from 'src/app/reciclaje/mapa-modal/mapa-modal.page';


@Component({
  selector: 'app-reciclaje',
  templateUrl: './reciclaje.page.html',
  styleUrls: ['./reciclaje.page.scss'],
})
export class ReciclajePage {

  lugarActual: Lugar;
  lugaresLista: Lugar[] = [];
  constructor(private camera: Camera, private webview: WebView, private geo: Geolocation, private modalController: ModalController){}

  tomarFoto(slides){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log("ENTRO");
      /*
      let imagen = this.webview.convertFileSrc(imageData);
      let lugar = {nombre: '', urlImagen: imagen, descripcion: ''} as Lugar;
      this.geo.getCurrentPosition().then((resp) => {
        lugar.lat = resp.coords.latitude;
        lugar.lng = resp.coords.longitude;
        console.log(resp);
        this.lugaresLista.push(lugar);
        slides.update().then(()=>{
          slides.length().then(number => console.log(number));
        })
      })
*/
      setTimeout(()=>{
        slides.length().then(number => console.log(number));
        slides.slideTo(this.lugaresLista.length - 1);
      }, 100);
     }, (err) => {
      // Handle error
     });
  }

  onSlideChanged(mySlides) {
    mySlides.getActiveIndex().then(index => {
      console.log(this.lugaresLista[index]);
    });
  }

  eliminarLugar(slides){
    slides.getActiveIndex().then(index=>{
      if(index===0) slides.slideNext().then(()=>{
        this.lugaresLista.splice(index, 1);
      });
      else slides.slidePrev().then(()=>{
        this.lugaresLista.splice(index, 1);
      });
    });

    setTimeout(()=>{
      slides.update()
    }, 100);
  }

  mostrarMapa(){
    this.modalController.create({
      component: MapaModalPage,
      componentProps: { lugaresLista: this.lugaresLista }
    }).then(modal=>{
      modal.present();
    });
  }

 

}
