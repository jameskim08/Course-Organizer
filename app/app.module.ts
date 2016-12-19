import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CourseDetailComponent } from './course-detail.component';
import { CoursesComponent } from './courses.component';
import { CourseService } from './course.service';
import { CourseSearchComponent } from './course-search.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CourseDetailComponent,
    CoursesComponent,
    CourseSearchComponent
  ],
  providers: [
    CourseService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
