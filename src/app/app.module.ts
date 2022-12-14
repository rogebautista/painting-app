import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/*
* User modules
* */
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';
//import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


// imports
//import { File } from '@ionic-native/file/ngx';
//import { FileOpener } from '@ionic-native/file-opener/ngx';
//import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Base64ToGallery,
    SocialSharing,
    //PDFGenerator,
    //File,
    FileOpener,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
