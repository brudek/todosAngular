import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';

  readonly param = new HttpParams().set('apiKey', 'ZqEZutPrBgOh8wioSMkblYSSoZ57kAPP');

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  allTasks: Array<Task>;

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, {params: this.param})
    .subscribe( tasks => {
      console.log(tasks);
      alert('Zapisane!');
    });
  }
}
