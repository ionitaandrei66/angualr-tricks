import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-e',
  standalone: true,
  imports: [],
  host: {ngSkipHydration: 'true'},
  templateUrl: './parent-e.component.html',
  styleUrl: './parent-e.component.scss'
})
export class ParentEComponent {

}
