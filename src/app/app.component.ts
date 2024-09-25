import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showDetails: boolean = false;
  logArr: number[] = [];
  i = 1;

  onToggle() {
    this.showDetails = !this.showDetails;
    this.logArr.push(this.i);
    this.i += 1;
  }
  // username = '';
  // allowReset = false;
  // onResetUpdateState() {
  //   if (this.username !== '' && this.username !== ' ') {
  //     this.allowReset = true;
  //   } else {
  //     this.allowReset = false;
  //   }
  // }
  // onReset(event: any) {
  //   this.username = '';
  //   event.target.value = '';
  //   this.onResetUpdateState();
  // }
}
