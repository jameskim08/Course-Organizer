import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs';

import { Course }           from './course';

@Injectable()
export class CourseSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Course[]> {
    return this.http
      .get(`app/courses/?name=${term}`)
      .map((r: Response) => r.json().data as Course[]);
  }
}
