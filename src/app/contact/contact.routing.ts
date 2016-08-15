import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts.page';

export const routes = [
  { path: "contact", component: ContactsListComponent }
];

export const routing = RouterModule.forChild(routes);
