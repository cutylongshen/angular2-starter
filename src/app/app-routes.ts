import { Routes, RouterModule } from '@angular/router';

import { MainFrameComponent } from './main-frame.component';
import { ContactsListComponent } from './contacts-list';

export const routes = [
  { path: "", component: MainFrameComponent,
    children: [
      {
        path: "",
        component: ContactsListComponent 
      }
    ] 
  }
];

export const routing = RouterModule.forRoot(routes);
