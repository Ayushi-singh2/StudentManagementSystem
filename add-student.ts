import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student';
import { Student } from '../../models/model';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  student: Student = { name: '', email: '', course: '', age: 0 };

  constructor(private service: StudentService, private router: Router) {}

  save() {
    this.service.create(this.student).subscribe(() => {
      alert('Student Added!');
      this.router.navigate(['/students']);
    });
  }
}
