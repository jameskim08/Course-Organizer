import { Component, OnInit } from '@angular/core';

import { Course  } from './course';
import { CourseService } from './course.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
  currentDaysCourses: Course[] = [];
  today : Date = new Date();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses()
      .then(courses => {
        this.currentDaysCourses = courses.filter(course => {
          return course.day.indexOf(this.today.getDay()) !== -1;
        });
      })
  }

}
