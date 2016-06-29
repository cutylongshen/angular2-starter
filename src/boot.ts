import "reflect-metadata";
import "rxjs";
import "zone.js/dist/zone";

// import {enableProdMode} from '@angular/core';
// enableProdMode()

import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { MyAppComponent } from './app/myAppComponent';
import { APP_ROUTER_PROVIDERS } from './app/contacts-routes';

bootstrap(
    MyAppComponent, [
        HTTP_PROVIDERS,
        APP_ROUTER_PROVIDERS
    ])
    .catch(err => console.error(err));
