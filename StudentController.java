package com.example.demo4.Controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo4.model.Student;
import com.example.demo4.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:39313")
public class StudentController {
	private final StudentService service;
	
	public StudentController(StudentService service) {
		this.service = service;
	}
	
	@GetMapping
	public List<Student> getAll(){
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public Student getById(@PathVariable Long id) {
		return service.getById(id);
	}
	
	@PostMapping
	public Student create(@RequestBody Student s) { 
		return service.create(s); 
	}
	
	@PutMapping("/{id}")
	public Student update(@PathVariable Long id, @RequestBody Student s) {
		return service.update(id, s);
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id) {
		service.delete(id);
		return "Deleted";
	}
	
	@GetMapping("/page")
	public Page<Student> getStudentsPaginated(
	        @RequestParam(defaultValue = "0") int page,
	        @RequestParam(defaultValue = "5") int size
	) {
	    Pageable pageable = PageRequest.of(page, size);
	    return service.getStudents(pageable);
	}
}
