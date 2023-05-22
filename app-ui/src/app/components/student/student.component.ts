import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from 'src/services/user.service';
import { Enumerations } from '../../enums/enumerations';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  student: User = new User();
  listStudents: Array<User> = [];
  displayAddStudent: boolean = false;
  displayConfirmDelete: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadListStudents();
  }

  loadListStudents() {
    this.userService
      .getAllStudents()
      .subscribe((listStudent) => (this.listStudents = listStudent));
  }

  isValidStudent(): boolean {
    return (
      this.student.email != null &&
      this.student.firstName != null &&
      this.student.lastName != null &&
      this.student.rfid != null &&
      this.student.password != null
    );
  }

  updateStudent() {
    this.userService.updateStudent(this.student).subscribe((student) => {
      this.displayAddStudent = false;
      this.loadListStudents();
    });
  }

  addStudent() {
    this.student.role = Enumerations.UserRole.STUDENT;
    this.userService.addStudent(this.student).subscribe((student) => {
      this.displayAddStudent = false;
      this.loadListStudents();
    });
  }

  saveStudent(): void {
    if (this.student.id == null) {
      this.addStudent();
    } else {
      this.updateStudent();
    }
  }

  addUser() {
    this.student = new User();
    this.displayAddStudent = true;
  }

  editStudent(student: User) {
    this.student = student;
    this.displayAddStudent = true;
  }

  deleteStudent(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.displayConfirmDelete = false;
      this.loadListStudents();
    });
  }
}
