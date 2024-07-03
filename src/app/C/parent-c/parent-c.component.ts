import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  standalone: true,
  imports: [],
  templateUrl: './parent-c.component.html',
  styleUrl: './parent-c.component.scss'
})
export class ParentCComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
