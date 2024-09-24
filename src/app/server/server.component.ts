import { Component } from '@angular/core';

@Component({
  selector: '[type="text"]',
  template: ` <p>ServerComponent with inline template and not external</p> `,
  styleUrl: './server.component.css',
})
export class ServerComponent {
  name: string;

  constructor() {
    this.name = 'Heris';
  }
}
