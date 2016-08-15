import { Routes, RouterModule } from '@angular/router';

import { ObservablePage } from './observable.page';

export const routes = [
  { path: "observable", component: ObservablePage }
];

export const routing = RouterModule.forChild(routes);
