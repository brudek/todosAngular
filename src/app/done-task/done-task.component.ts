import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDone: Array<Task>;
  firstFive: boolean;
  sort = 'date';

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks.filter(task => task.isDone === true);
    });

    this.tasksService.getFirstFiveObs().subscribe( (first: boolean) => {
      this.firstFive = first;
    });
  }

  ngOnInit() {
  }

  sortBy(param: string) {
    if (param === 'alpha') {
      this.sort = 'alpha';
    } else {
      this.sort = 'date';
    }
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks.filter( task => task.isDone === true).slice();
    });
  }
}
