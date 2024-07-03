import { Component } from '@angular/core';
import {ChildBComponent} from "../child-b/child-b.component";

@Component({
  selector: 'app-parent-b',
  standalone: true,
  imports: [
    ChildBComponent
  ],
  templateUrl: './parent-b.component.html',
  styleUrl: './parent-b.component.scss'
})
export class ParentBComponent {



  constructor() {}

  functionSetter(list: any[]){
    if(list)
    list.push('test')
  }

}
