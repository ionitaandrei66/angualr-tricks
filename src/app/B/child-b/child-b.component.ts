import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.scss'
})
export class ChildBComponent implements OnInit{
  list=[{
    id:15,
    name:'George',
    code: '091'
  },{
    id:17,
    name:'Andrei',
    code: '041'
  },{
    id:20,
    name:'Enchea',
    code: '031'
  },{
    id:25,
    name:'Alibab',
    code: '021'
  },]
  parentFunction!: Function;

  @Input() set functionSet(fn: Function){
    this.parentFunction = fn;
  }
  constructor() {}

  ngOnInit() {
    this.parentFunction(this.list)
    console.log(this.list)
  }
}
