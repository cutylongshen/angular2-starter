import { Routes, RouterModule } from '@angular/router';

import { CaseInsensitiveUrlMatcher } from '../utility/caseInsensitiveMatcher';
import { AnimationPage } from './animation.page';

export const routes = [
  { path: "animation", 
    component: AnimationPage
  }
];

export const routing = RouterModule.forChild(routes);
