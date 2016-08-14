import "reflect-metadata";
import "rxjs";
import "zone.js/dist/zone";

// import {enableProdMode} from '@angular/core';
// enableProdMode()

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule( AppModule );

