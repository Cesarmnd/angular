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
      id: 1,
      name: 'Roberto',
      age: 24,
      grade: 15,
      email: 'Roberto@gmail.com'
    },
    {
      id: 2,
      name: 'Esteban',
      age: 22,
      grade: 18,
      email: 'Esteban@gmail.com'
    },
    {
      id: 3,
      name: 'Leyla',
      age: 18,
      grade: 7,
      email: 'Leyla@gmail.com'
    },
    {
      id: 4,
      name: 'Valeria',
      age: 22,
      grade: 18,
      email: 'Valeria@gmail.com'
    },
    {
      id: 5,
      name: 'Liliana',
      age: 24,
      grade: 6,
      email: 'Liliana@gmail.com'
    },
    {
      id: 6,
      name: 'Leyla',
      age: 23,
      grade: 15,
      email: 'Leyla@gmail.com'
    }
  ]
}
