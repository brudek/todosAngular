import { TasksService } from './services/tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private tasksService: TasksService) {

  }

  save() {
    this.tasksService.saveTasksInDB();
  }
}
