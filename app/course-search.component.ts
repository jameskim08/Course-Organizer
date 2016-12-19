import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { CourseSearchService } from './course-search.service';
import { Course } from './course';

@Component({
  moduleId: module.id,
  selector: 'course-search',
  templateUrl: 'course-search.component.html',
  styleUrls: [ 'course-search.component.css' ],
  providers: [CourseSearchService]
})

export class CourseSearchComponent implements OnInit {
  courses: Observable<Course[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private courseSearchService: CourseSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.courses = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
          .distinctUntilChanged()   // ignore if next search term is same as previous
          .switchMap(term => term ? this.courseSearchService.search(term) : Observable.of<Course[]>([]))
          .catch(error => {
            return Observable.of<Course[]>([]);
          });
  }

  gotoDetail(course: Course): void {
    let link = ['/detail', course.id];
    this.router.navigate(link);
  }
}
