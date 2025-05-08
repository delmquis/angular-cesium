import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Ion } from 'cesium';

if (environment.production) {
  enableProdMode();
}

Ion.defaultAccessToken = environment.cesiumIonKey;
window['CESIUM_BASE_URL'] = '/assets/Cesium/';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
