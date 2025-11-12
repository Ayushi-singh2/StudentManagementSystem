import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student';
import { Student } from '../../models/model';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css',
})
export class EditStudent implements OnInit {
  id!: number;
  student: Student = { name: '', email: '', course: '', age: 0 };

  constructor(
    private route: ActivatedRoute,
    private service: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(this.id).subscribe(data => this.student = data);
  }

  update() {
    this.service.update(this.id, this.student).subscribe(() => {
      alert('Student Updated!');
      this.router.navigate(['/students']);
    });
  }

}
