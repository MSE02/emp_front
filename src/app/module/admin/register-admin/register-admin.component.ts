import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/zynerator/security/User.model';
import { Role } from 'src/app/zynerator/security/Role.model';
import { AuthService } from 'src/app/zynerator/security/Auth.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  registerForm = new FormGroup({
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  user: User = new User(); // Create a new User object

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }
  isEmailValid: boolean;

  validateEmail(user: User): boolean {
    if (user.email == null || user.email.trim() === '') {
      this.isEmailValid = true; // Champ d'e-mail vide, aucune erreur
      return false; // Le bouton de validation doit être activé
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isEmailValid = emailRegex.test(user.email);

    return !this.isEmailValid;
  }

  submit() {
    const formValues = this.registerForm.value;
    const { prenom, nom, userName, password, email } = formValues;
    const role = new Role();
    role.authority = 'ROLE_Admin';
    this.user.prenom = prenom;
    this.user.nom = nom;
    this.user.username = userName;
    this.user.password = password;
    this.user.email = email;
    this.user.roles = [role];
    this.authService.registerAdmin(this.user); // Pass the user object to the registerAdmin method
  }
}