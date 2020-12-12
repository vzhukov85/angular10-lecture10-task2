import { Component, OnInit } from '@angular/core';
import { CourseService, Homework } from '../course.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  constructor(private courseSrv: CourseService) { }

  ngOnInit(): void {
  }

  get references(): Homework[] {
    console.log(this.courseSrv.reference);
    return this.courseSrv.reference;
  }

}
