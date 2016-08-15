import { Routes, RouterModule } from '@angular/router';

import { MainFrameComponent } from './main-frame.component';
import { HomePage } from './home.page';

export const routes = [
  { path: '', component: MainFrameComponent, children: [
      { path: '', component: HomePage }
  ] },
  { path: 'contact', loadChildren: 'contact/contact.module' },
  { path: 'animation', loadChildren: 'animation/animation.module' },
  { path: 'observable', loadChildren: 'observable/observable.module'},
  { path: 'subject', loadChildren: 'subject/subject.module' }
];

export const routing = RouterModule.forRoot(routes);
