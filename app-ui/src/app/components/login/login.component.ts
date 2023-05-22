import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password: string = '';
  email: string = '';
  emailf: string = '';
  showSuccess: boolean = false;
  showError: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.email, this.password).subscribe(
      (resultData: any) => {
        if (resultData.message == 'Bad Credentials.') {
          alert('Bad Credentiels');
        } else {
          localStorage.setItem('token', resultData.token);
          this.router.navigateByUrl('/dashboard');
        }
      },
      (error: any) => {
        console.error(error);
        this.showError = true;
      }
    );
  }

  forgotPass() {
    this.userService.forgotPass(this.email).subscribe((resultData: any) => {
      console.log(resultData.message);

      if (resultData.message == 'Check your mail for Credentials.') {
        this.showSuccess = true;
      }
    });
  }
}
