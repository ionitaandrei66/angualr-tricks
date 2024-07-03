import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-parent-h',
  standalone: true,
  imports: [],
  templateUrl: './parent-h.component.html',
  styleUrl: './parent-h.component.scss'
})
export class ParentHComponent {

  quality = signal<number>(1);
  qualityObject = signal<{name:string,price:number}>({price:10,name: 'Ali'});
  computed = computed(()=> this.quality()+ this.qualityObject().price)

  constructor() {
    //Change value of signal and will change the computed too
    this.quality.set(3);

    //mutate()
    // The sole distinction between update and mutate is that update returns the updated value while mutate modifies the object itself:
    //
    // messages = signal<object[]>([{message: 'Hello World!'}]);
    //
    // ngOnInit(): void {
    //    this.messages.mutate(values => values[0].message = 'Hello Signals!');
    // }
    // One important point to note here is that the updated object (in this example, an array) is not required to be returned. Furthermore, we are not replacing the entire object, but rather modifying one of its contents. Nonetheless, invoking the mutate function indicates that the object has changed and that any further modifications must be performed.

    //update()
    // We can use update() to update the signal when the new value of the signal depends on the old value of the
  }
}
