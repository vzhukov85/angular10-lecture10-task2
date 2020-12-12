import { Component, OnInit } from '@angular/core';
import { CourseService, Homework } from '../course.service';


@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
})
export class HomeworkComponent implements OnInit {
  constructor(private courseSrv: CourseService) {}

  ngOnInit(): void {}

  get homeworks(): Homework[] {
    return this.courseSrv.homeworks;
  }
}
