import { Routes, RouterModule } from '@angular/router';

import { CaseInsensitiveUrlMatcher } from '../utility/caseInsensitiveMatcher';
import { SplitterPage } from './splitter.page';
import { SliderPage } from './slider.page';

export const routes = [
  { path: "splitter", component: SplitterPage },
  { path: "slider", component: SliderPage}
];

export const routing = RouterModule.forChild(routes);
