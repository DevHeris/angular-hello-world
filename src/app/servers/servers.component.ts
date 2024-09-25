import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = true;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverRuntime = 0;

  onShowText(): void {
    document.getElementById('text').style.display = 'block';
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'A server was created!';
  }

  onUpdateServerName(event: InputEvent): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
