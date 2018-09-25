import { Task } from './../models/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  tasksDone: Array<Task>;
  firstFive = true;

  constructor(private taskService: TasksService) {
    this.taskService.getTasksListObs().subscribe( (tasks: Array<Task>) => {
      this.tasksDone = tasks.filter(task => task.isDone === true);
    });
   }

  ngOnInit() {
  }

  closePopup() {
    this.firstFive = false;
    this.taskService.closePopup();
  }

}
