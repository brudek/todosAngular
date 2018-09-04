import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css']
})
export class TodoCounterComponent implements OnInit {

  tasksList: Array<string>;

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe(
      tasks => {
        this.tasksList = tasks;
      }
    );
   }

  ngOnInit() {
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

}
