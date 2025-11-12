import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Student } from '../../models/model';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css'],
})
export class StudentList implements OnInit {
  students: Student[] = [];
  currentPage = 0;
  totalPages = 0;

  constructor(private service: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents(0);
  }

  deleteStudent(id: number) {
    this.service.delete(id).subscribe(() => this.loadStudents(0));
  }

  editStudent(id: number) {
    this.router.navigate(['/edit', id]);
  }

  addStudent() {
    this.router.navigate(['/add']);
  }

   loadStudents(page: number): void {
    this.service.getStudentsPaginated(page, 5).subscribe(response => {
      this.students = response.content;
      this.totalPages = response.totalPages;
      this.currentPage = response.number;
    });
  }

  nextPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.loadStudents(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.loadStudents(this.currentPage - 1);
    }
  }
}
