import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './course';

@Injectable()
export class CourseService {
  private coursesUrl = 'api/courses';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getCourses(): Promise<Course[]> {
    return this.http.get(this.coursesUrl)
      .toPromise()
      .then(response => response.json().data as Course[])
      .catch(this.handleError);
  }

  getCourse(id: number): Promise<Course> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Course)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  update(course: Course): Promise<Course> {
    const url = `${this.coursesUrl}/${course.id}`;
    return this.http
      .put(url, JSON.stringify(course), {headers: this.headers})
      .toPromise()
      .then(() => course)
      .catch(this.handleError);
  }

  create(name: string): Promise<Course> {
    return this.http
      .post(this.coursesUrl, JSON.stringify({name: name, day: []}), {headers: this.headers})
      .toPromise()
      .then(res => {
        console.log(res.json().data);
        return res.json().data;
      })
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
