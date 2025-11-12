package com.example.demo4.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo4.model.Student;
import com.example.demo4.repository.StudentRepository;

@Service
public class StudentService {
	private final StudentRepository repo;
	
	public StudentService(StudentRepository repo) {
		this.repo = repo;
	}
	
	public Student create(Student s) {
		return repo.save(s); // student data save
	}
	
	public List<Student> getAll(){
		return repo.findAll();
	}
	public Student getById(Long id) {
		return repo.findById(id).orElseThrow();
	}
	public Student update(Long id, Student s) {
		Student student = repo.findById(id).orElseThrow();
		student.setName(s.getName());
		student.setEmail(s.getEmail());
		student.setCourse(s.getCourse());
		student.setAge(s.getAge());
		return repo.save(student);
	}
	public void delete(Long id) {
		repo.deleteById(id);
	}
	
	public Page<Student> getStudents(Pageable pageable) {
	        return repo.findAll(pageable);
	}
}

