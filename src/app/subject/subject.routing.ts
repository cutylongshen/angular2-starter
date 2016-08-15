import { Routes, RouterModule } from '@angular/router';

import { SubjectPage } from './subject.page';

export const routes = [
  { path: "subject", component: SubjectPage }
];

export const routing = RouterModule.forChild(routes);
