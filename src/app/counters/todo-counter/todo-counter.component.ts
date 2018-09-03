import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css']
})
export class TodoCounterComponent implements OnInit {

  @Input()
  tasksList: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
