import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent-d',
  standalone: true,
  imports: [],
  templateUrl: './parent-d.component.html',
  styleUrl: './parent-d.component.scss'
})
export class ParentDComponent {
  @ViewChild('ThreeButton') ThreeButton!: ElementRef;
  @ViewChild('TwoButton') TwoButton!: ElementRef;
  @ViewChild('OneButton') OneButton!: ElementRef;

  //todo In Angular (and web development in general),
  // event propagation can occur in two phases: capturing and bubbling.
  // These phases describe the order in which event handlers are
  // invoked when an event occurs on an element and propagates through its ancestors in the DOM tree.



  handleOuterDivClick() {
    console.log('handleOuterDivClick')
  }

  handleInnerDivClick($event: MouseEvent) {
    console.log('handleInnerDivClick', $event)
    //todo event.stopPropagation()  if you use here(the middle function) will stop the whole bubbling even the handleOuterDivClick
  }

  handleButtonClick() {
    console.log('handleButtonClick')
    //todo  you can call event.stopPropagation() in the event handler to prevent the event from bubbling up further.
    //The click event propagates from the innermost element (the button) up to the outermost element (the outer <div>), triggering the event handlers at each level of the DOM hierarchy.
    //You can use event bubbling to capture and handle events at different levels of your component’s template hierarchy. However, if you want to stop event propagation at a certain level, you can call event.stopPropagation() in the event handler to prevent the event from bubbling up further.
  }
  ngAfterViewInit() {
    //angular doesn't have capturing event, (click) event is bubbling
    this.OneButton.nativeElement.addEventListener('click', () => {
      console.log('Clicked during capturing phase ONE');
    }, true); // The `true` here signifies capturing phase
    this.TwoButton.nativeElement.addEventListener('click', () => {
      console.log('Clicked during capturing phase TWO');
    }, true); // The `true` here signifies capturing phase
    this.ThreeButton.nativeElement.addEventListener('click', () => {
      console.log('Clicked during capturing phase THREE');
    }, true); // The `true` here signifies capturing phase
  }

  ngOnDestroy() {
    this.OneButton.nativeElement.removeEventListener('click');
    this.TwoButton.nativeElement.removeEventListener('click');
    this.ThreeButton.nativeElement.removeEventListener('click');
  }

  handleListClick(event: MouseEvent) {
    //In this example, we have a list of items within an <ul> element.
    // Instead of attaching a click event handler to each <li> element individually, we attach a single click event handler to the <ul> element, which acts as the common ancestor.
    if (event.target instanceof HTMLLIElement) {
      const clickedItem = event.target.textContent;
      console.log(`Clicked on: ${clickedItem}`);
    }
  }
}
