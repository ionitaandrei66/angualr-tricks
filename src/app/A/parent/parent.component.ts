import { Component } from '@angular/core';
import {ChildComponent} from "../child/child.component";
import {TransferDataDirective} from "../transfer-data.directive";

@Component({
  selector: 'transfer-data-parent',
  standalone: true,
  imports: [
    ChildComponent,
    TransferDataDirective
  ],
  templateUrl: './parent.component.html',
})
export class ParentComponent {

}
