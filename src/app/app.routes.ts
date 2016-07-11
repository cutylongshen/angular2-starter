import { provideRouter, Route } from "@angular/router";

import { ContactsListComponent } from './contacts.page';
import { AnimationPage } from './animation.page';
import { ObservablePage } from './observable.page';
import { SubjectPage } from './subject.page';

const routes = [
  { path: "", component: ContactsListComponent, terminal: true },
  { path: "animation", component: AnimationPage },
  { path: "observable", component: ObservablePage },
  { path: "subject", component: SubjectPage }
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];