import { Component } from '@angular/core';
import { Student } from 'src/app/models/students';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  studentList: Array<Student> = [
    {
      name: 'Roberto',
      age: 24,
      grade: 15
    },
    {
      name: 'Esteban',
      age: 22,
      grade: 18
    },
    {
      name: 'Leyla',
      age: 18,
      grade: 7
    }
  ]
}
