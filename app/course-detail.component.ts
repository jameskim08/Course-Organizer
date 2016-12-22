import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CourseService } from './course.service';
import {Course} from "./course";

@Component({
  moduleId: module.id,
  selector: 'my-course-detail',
  templateUrl: 'course-detail.component.html',
  styleUrls: ['course-detail.component.css']

})
export class CourseDetailComponent implements OnInit {
  course: Course;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) =>
        this.courseService.getCourse(+params['id'])
      )
      .subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
  }

  cancel(): void {

  }

  save(): void {
    this.courseService.update(this.course)
      .then(() => this.goBack());
  }

  toggleDay(day : number): void {
    if (this.course.day.indexOf(day) != -1){
      let index = this.course.day.indexOf(day);
      this.course.day.splice(index, 1);
    }else{
      this.course.day.push(day);
    }
    this.course.day.sort();
  }

  test() : void{
    console.log(this.course.notes);
  }

}


