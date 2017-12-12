import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatabaseService, ForecastService, Sql, UtilService } from '../providers';
import { MosumApp } from './app.component';
import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MosumApp
  ],
  imports: [
    JsonpModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MosumApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MosumApp
  ],
  providers: [
    Keyboard,
    Sql,
    DatabaseService,
    UtilService,
    ForecastService,
    SplashScreen,
    StatusBar,
    BrowserTab,
    AdMobFree,
  ]
})
export class AppModule {
}
