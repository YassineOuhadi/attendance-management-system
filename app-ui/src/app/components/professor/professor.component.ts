import { Component, OnInit } from '@angular/core';
import { User } from '../../../app/classes/user';
import { UserService } from 'src/services/user.service';
import { Enumerations } from '../../../app/enums/enumerations';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})
export class ProfessorComponent implements OnInit {
  professor: User = new User();
  listProfessors: Array<User> = [];
  displayAddProfessor: boolean = false;
  displayConfirmDelete: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadListProfessors();
  }

  loadListProfessors() {
    this.userService
      .getAllProfessors()
      .subscribe((listProfessor) => (this.listProfessors = listProfessor));
  }

  isValidProfessor(): boolean {
    return (
      this.professor.email != null &&
      this.professor.firstName != null &&
      this.professor.lastName != null &&
      this.professor.rfid != null &&
      this.professor.password != null
    );
  }

  updateProfessor() {
    this.userService.updateProfessor(this.professor).subscribe((professor) => {
      this.displayAddProfessor = false;
      this.loadListProfessors();
    });
  }

  addProfessor() {
    this.professor.role = Enumerations.UserRole.STUDENT;
    this.userService.addProfessor(this.professor).subscribe((professor) => {
      this.displayAddProfessor = false;
      this.loadListProfessors();
    });
  }

  saveProfessor(): void {
    if (this.professor.id == null) {
      this.addProfessor();
    } else {
      this.updateProfessor();
    }
  }

  addUser() {
    this.professor = new User();
    this.displayAddProfessor = true;
  }

  editProfessor(professor: User) {
    this.professor = professor;
    this.displayAddProfessor = true;
  }

  deleteProfessor(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.displayConfirmDelete = false;
      this.loadListProfessors();
    });
  }
}
