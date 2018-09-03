import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  @Input()
  tasksList: Array<string>;

  @Input()
  tasksDone: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
