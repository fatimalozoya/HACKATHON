import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
{
  title: 'Inicio',
  url: '/home',
  icon: 'home'
},
{
  title: 'Iniciar Sesion',
  url: '/login',
  icon: 'md-person'
},
{
  title: 'Registrarse',
  url: '/registrar',
  icon: 'md-at'
},
  {
    title: 'Reforestación',
    url: '/reforestacion',
    icon: 'ios-leaf'
  },
  {
    title: 'Productos',
    url: '/ventas',
    icon: 'md-cart'
  },
  {
    title: 'Donaciones',
    url: '/donaciones',
    icon: 'logo-usd'
  },
  {
    title: 'Actividades',
    url: '/metas',
    icon: 'md-checkmark-circle'
  },
  {
    title: 'Reciclaje',
    url: '/reciclaje',
    icon: 'md-medal'
  }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
