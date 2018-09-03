import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done-counter',
  templateUrl: './done-counter.component.html',
  styleUrls: ['./done-counter.component.css']
})
export class DoneCounterComponent implements OnInit {

  @Input()
  tasksDone: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
