import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  serverId: number = 12;
  serverStatus: string = Math.random() > 0.5 ? 'offline' : 'online';

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'lightgreen' : 'pink';
  }
}
