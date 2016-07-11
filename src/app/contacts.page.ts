import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-list',
  template: `
    <h2>Contacts</h2>
    <ul>
      <li *ngFor="let contact of contacts">
        {{contact.name}}
      </li>
    </ul>
  `
})
export class ContactsListComponent implements OnInit {
  private contacts = null;
  constructor() {
  }

  ngOnInit() {
    this.contacts = [
      {
        name: "alice"
      }
    ];
  }
}