import "reflect-metadata";
import "rxjs";
import "zone.js/dist/zone";

// import {enableProdMode} from '@angular/core';
// enableProdMode()

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

platformBrowserDynamic().bootstrapModule( AppModule );



