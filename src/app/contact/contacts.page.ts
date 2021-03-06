import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
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
  private contacts: Array<any> = null;
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