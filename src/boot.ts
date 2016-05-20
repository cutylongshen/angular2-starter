import "es6-shim";
import "es6-promise";
import "reflect-metadata";
import "rxjs";
import "zone.js/dist/zone";

import { bootstrap }      from 'angular2/platform/browser'
import { MyAppComponent } from './app/myAppComponent';

bootstrap( MyAppComponent );