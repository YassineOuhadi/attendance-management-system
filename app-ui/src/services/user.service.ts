import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:9090/user/login', {
      email: username,
      password: password,
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  forgotPass(username: string): Observable<any> {
    return this.http.post('http://localhost:9090/user/forgotPassword', {
      email: username,
    });
  }

  addStudent(student: User): Observable<User> {
    return this.http.post<User>('http://localhost:9090/student/add', student);
  }

  updateStudent(student: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:9090/student/update',
      student
    );
  }

  getAllStudents(): Observable<Array<User>> {
    return this.http.get<Array<User>>('http://localhost:9090/student/get');
  }

  delete(id: number): Observable<any> {
    return this.http.post('http://localhost:9090/user/delete/' + id, {});
  }

  addProfessor(student: User): Observable<User> {
    return this.http.post<User>('http://localhost:9090/professor/add', student);
  }

  updateProfessor(student: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:9090/professor/update',
      student
    );
  }

  getAllProfessors(): Observable<Array<User>> {
    return this.http.get<Array<User>>('http://localhost:9090/professor/get');
  }
}
