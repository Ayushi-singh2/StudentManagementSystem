import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Student {
  id?:number;
  name:string;
  email:string;
  course:string;
  age:number;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseURL = 'http://localhost:9087/students';
  constructor(private http : HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseURL);
  }

  create(student : Student) : Observable<Student> {
    return this.http.post<Student>(this.baseURL, student);
  }

  getById(id: number): Observable<Student> { 
    return this.http.get<Student>(`${this.baseURL}/${id}`); 
  }

  update(id: number, student: Student): Observable<Student> { 
    return this.http.put<Student>(`${this.baseURL}/${id}`, student); 
  }

  delete(id: number): Observable<any> { 
    return this.http.delete(`${this.baseURL}/${id}`); 
  }

  getStudentsPaginated(page: number, size: number): Observable<any> {
  return this.http.get<any>(`${this.baseURL}/page?page=${page}&size=${size}`);
  }
}
