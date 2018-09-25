import { TasksService } from './../services/tasks.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList = [];
  sort = 'date';

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter(task => task.isDone === false);
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    this.tasksService.done(task);
  }

  sortBy(param: string) {
    if (param === 'alpha') {
      this.sort = 'alpha';
    } else {
      this.sort = 'date';
    }
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter( task => task.isDone === false).slice();
    });
  }

}
