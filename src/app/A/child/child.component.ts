import {Component, ContentChild} from '@angular/core';
import {TransferDataDirective} from "../transfer-data.directive";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'transfer-data-child',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './child.component.html',
})
export class ChildComponent {

  @ContentChild(TransferDataDirective,{static: true}) option!: TransferDataDirective;
}
