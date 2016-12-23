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
  weekdays: Date[] = [
    new Date(88, 12, 15), //sunday
    new Date(88, 12, 16), //monday
    new Date(88, 12, 17), //tuesday
    new Date(88, 12, 18), //wednesday
    new Date(88, 12, 19), //thursday
    new Date(88, 12, 20), //friday
    new Date(88, 12, 21)]; //saturday

  constructor(
    private router: Router,
    private courseService: CourseService){}

  onSelect(course: Course): void{
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.courseService.getCourses()
      .then(courses => this.courses = courses.sort(function(a,b){
        if (a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase() ) return 1;
        return 0;
      }));
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
        let tempArray = this.courses;
        tempArray.push(course);
        this.courses = tempArray.sort(function(a,b){
          if (a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase() ) return 1;
          return 0;
        });
        console.log(11111111111, this.courses);
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

  displayListView() : void {
    if(document.getElementById("list-view").className.indexOf('selected-view') === -1) {
      document.getElementById("list-view").className += " selected-view";
      document.getElementById("week-view").className = "";

      document.getElementById("list-view-btn").className += " selected-view-btn";
      document.getElementById("week-view-btn").className = "";

      this.selectedCourse = null;
    }

    console.log("listview buton pressed");
  }

  displayWeekView() : void {
    if(document.getElementById("week-view").className.indexOf('selected-view') === -1) {
      document.getElementById("week-view").className += " selected-view";
      document.getElementById("list-view").className = "";

      document.getElementById("week-view-btn").className += " selected-view-btn";
      document.getElementById("list-view-btn").className = "";

      this.selectedCourse = null;
    }
    console.log("weekview buton pressed");
  }

  isWeekdayEmpty(weekday : Date) : boolean {
    let weekdayArray: Course[] = [];

    if (this.courses != null) {
      weekdayArray = this.courses.filter(course => {
        return course.day.indexOf(weekday.getDay()) > -1;
      });
    }

    if (weekdayArray.length === 0) {
      return true;
    }

    return false;
  }
}
