import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];
  private firstFive: boolean;

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);
  private firstFiveObs = new Subject();

  constructor() {
    this.tasksList = [
      {name: 'Sprzątanie pokoju', created: new Date()},
      {name: 'Gotowanie', created: new Date()},
      {name: 'Nauka angielskiego', created: new Date()},
      {name: 'Spacer', created: new Date()}
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter( e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  closePopup() {
    this.firstFive = false;
    this.firstFiveObs.next(this.firstFive);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }

  getFirstFiveObs(): Observable<{}> {
    return this.firstFiveObs.asObservable();
  }
}
