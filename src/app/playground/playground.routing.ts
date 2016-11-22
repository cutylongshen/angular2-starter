import { Routes, RouterModule } from '@angular/router';

import { CaseInsensitiveUrlMatcher } from '../utility/caseInsensitiveMatcher';
import { SplitterPage } from './splitter.page';

export const routes = [
  { path: "splitter", component: SplitterPage
  }
];

export const routing = RouterModule.forChild(routes);
