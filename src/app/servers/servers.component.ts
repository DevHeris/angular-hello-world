import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverRuntime = 0;
  serverCreated = false;

  onShowText(): void {
    document.getElementById('text').style.display = 'block';
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus =
      'A server ' + `"${this.serverName}"` + ' was created!';
  }

  onUpdateServerName(event: InputEvent): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
