package com.example.demo4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo4.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
