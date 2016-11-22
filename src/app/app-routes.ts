import { Routes, RouterModule } from '@angular/router';

import { MainFrameComponent } from './main-frame.component';
import { HomePage } from './home.page';

import { SplitterPage } from './playground/splitter.page';

export const routes = [
  { path: '', component: MainFrameComponent, children: [
      { path: '', component: HomePage }
  ] },

  // path will be ignore
  { path: 'contact', loadChildren: 'contact/contact.module' },
  { path: 'animation', loadChildren: 'animation/animation.module' },
  { path: 'observable', loadChildren: 'observable/observable.module'},
  { path: 'subject', loadChildren: 'subject/subject.module' },
  { path: 'playground', loadChildren: 'playground/playground.module' },
  { path: 'xxx', component: SplitterPage }
];

export const routing = RouterModule.forRoot(routes);
