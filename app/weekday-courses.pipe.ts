import { Pipe, PipeTransform } from '@angular/core';
import {Course} from "./course";

@Pipe({name: 'weekdayCourses'})
export class WeekdayCoursesPipe implements PipeTransform {
  /**
   * @param allCourses is an array of all the courses the user has
   * @param weekday is an integer that signifies which weekday the user wants to filter out their courses to
   *        (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday)
   * @returns {Course[]} is an array of the courses that are in the given weekday
   */
  transform(allCourses: Course[], weekday: number ) : Course[]{
    if(allCourses != null) {
      return allCourses.filter(course => {
        return course.day.indexOf(weekday) > -1;
      });
    }

  }
}
