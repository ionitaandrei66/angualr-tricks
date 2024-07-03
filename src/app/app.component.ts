import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ParentComponent} from "./A/parent/parent.component";
import {ParentBComponent} from "./B/parent-b/parent-b.component";
import {ParentCComponent} from "./C/parent-c/parent-c.component";
import {ParentDComponent} from "./D/parent-d/parent-d.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ParentComponent, ParentBComponent, ParentCComponent, ParentDComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tricks';
}
