import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {

  tasksDone: Array<Task>;
  sort = 'date';

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks.filter(task => task.isDone === true);
    });
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
