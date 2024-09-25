import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = true;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  serverRuntime: number = 0;
  serverCreated: boolean = false;
  servers: string[] = [];

  onShowText(): void {
    document.getElementById('text').style.display = 'block';
  }

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'A server ' + `"${this.serverName}"` + ' was created!';
  }

  onUpdateServerName(event: InputEvent): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
