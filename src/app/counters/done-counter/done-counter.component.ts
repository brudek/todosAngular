import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-done-counter',
  templateUrl: './done-counter.component.html',
  styleUrls: ['./done-counter.component.css']
})
export class DoneCounterComponent implements OnInit {

  tasksDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneObs().subscribe( tasks => {
      this.tasksDone = tasks;
    });
   }

  ngOnInit() {
  }

}
