import { Routes } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { AddStudent } from './components/add-student/add-student';
import { EditStudent } from './components/edit-student/edit-student';


export const routes: Routes = [
     { path: '', redirectTo: 'students', pathMatch: 'full' },
     { path: 'students', component: StudentList },
     { path: 'add', component: AddStudent },
     { path: 'edit/:id', component: EditStudent },
];
