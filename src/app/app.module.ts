import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx'

import { AgmCoreModule } from '@agm/core';
import { MapaModalPage } from 'src/app/reciclaje/mapa-modal/mapa-modal.page';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  declarations: [AppComponent, MapaModalPage],
  entryComponents: [MapaModalPage],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBnfVwFjCm5_2G6X8tRXU4jRlEd1bTY6Os'})
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    WebView,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
