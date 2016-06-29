import { provideRouter, Route } from "@angular/router";

import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';

const routes = [
  { path: "", component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsDetailComponent }
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];