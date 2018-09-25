import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private firstFive: boolean;

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private firstFiveObs = new Subject();

  constructor(private httpService: HttpService) {

    this.httpService.getTasks()
    .subscribe(list => {
      this.tasksListObs.next(list);
    });
    // const tasksList = [
    //   {name: 'Sprzątanie pokoju', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'Gotowanie', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'Nauka angielskiego', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'Spacer', created: new Date().toLocaleString(), isDone: false},
    //   {name: 'Spacer', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true}
    // ];
    // this.tasksListObs.next(tasksList);
  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter( e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  closePopup() {
    this.firstFive = false;
    this.firstFiveObs.next(this.firstFive);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getFirstFiveObs(): Observable<{}> {
    return this.firstFiveObs.asObservable();
  }

  saveTasksInDB() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }
}
