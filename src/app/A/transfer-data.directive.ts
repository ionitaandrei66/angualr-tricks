import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appTransferDataDirective]',
  standalone: true
})
export class TransferDataDirective<T = unknown> {

  constructor(public template: TemplateRef<{$implicit: T}>) { }

}
