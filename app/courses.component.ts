import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from "./course";
import { CourseService } from './course.service';

@Component({
  moduleId: module.id,
  selector: 'my-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css']
})

export class CoursesComponent implements OnInit {
  selectedCourse: Course;
  courses: Course[];

  constructor(
    private router: Router,
    private courseService: CourseService){}

  onSelect(course: Course): void{
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.courseService.getCourses().then(courses => this.courses = courses );
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCourse.id])
  }

  ngOnInit(): void {
    this.getCourses();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.courseService.create(name)
      .then(course => {
        this.courses.push(course);
        this.selectedCourse = null;
      });
  }

  delete(course: Course): void {
    this.courseService
      .delete(course.id)
      .then(() => {
        this.courses = this.courses.filter(h => h !== course);
        if (this.selectedCourse === course) {
          this.selectedCourse = null;
        }
      });
  }
}
