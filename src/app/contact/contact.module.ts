import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './contact.routing';
import { ContactsListComponent } from './contacts.page';

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ ContactsListComponent ],
    exports: [ ContactsListComponent ]
})
export class ContactModule{
}