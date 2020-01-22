import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showText = false;
  mouseClick: number = 0;
  clicks = [];

  toggleShowText() {
    this.showText = !this.showText;
    ++this.mouseClick;
    this.clicks.push(this.mouseClick);
  }
}
