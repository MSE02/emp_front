import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/zynerator/security/Auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  submit() {
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const password = formValues.password;
    this.authService.loginAdmin(username, password);
  }



  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input') as HTMLInputElement;
    const passwordToggleBtn = document.getElementById('password-toggle-btn');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggleBtn.classList.add('active');
    } else {
      passwordInput.type = 'password';
      passwordToggleBtn.classList.remove('active');
    }
  }

  register() {
    this.router.navigate(['/admin/register']);
  }
}
