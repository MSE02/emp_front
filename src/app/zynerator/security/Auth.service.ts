import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { BehaviorSubject, Observable, forkJoin, of } from 'rxjs';
import { Role } from './Role.model';
import { User } from './User.model';
import { TokenService } from './Token.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    readonly API = environment.loginUrl;
    public _user = new User();
    private _authenticatedUser = new User();
    private _authenticated = <boolean>JSON.parse(localStorage.getItem('autenticated')) || false;
    public _loggedIn = new BehaviorSubject<boolean>(false);
    public loggedIn$ = this._loggedIn.asObservable();
    public error: string = null;
    private waiting;


    constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) { }
    private loginAttempts = 0;

    public loginAdmin(username: string, password: string) {
        if (this.loginAttempts >= 3) {
          // Vérifier si l'utilisateur est déjà en attente
          if (this.waiting) {
            alert('Trop de tentatives de connexion. Veuillez attendre 30 secondes avant de réessayer.');
            return;
          }
          
          // Activer le mode d'attente
          this.waiting = true;
      
          setTimeout(() => {
            // Réinitialiser le compteur de tentatives et désactiver le mode d'attente après 30 secondes
            this.loginAttempts = 0;
            this.waiting = false;
          }, 30000);
        }
      
        this.http.post<any>(this.API + 'login', { username, password }, { observe: 'response' }).subscribe(
          resp => {
            this.error = null;
            const jwt = resp.headers.get('Authorization');
            jwt != null ? this.tokenService.saveToken(jwt) : false;
            this.loadInfos();
            console.log('you are logged in successfully');
            this.router.navigate(['/' + environment.rootAppUrl + '/admin']);
          },
          (error: HttpErrorResponse) => {
            this.error = error.error;
            console.log(error);
            // Incrémenter le compteur de tentatives de connexion
            this.loginAttempts++;
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
          }
        );
      }
      



    public loadInfos() {
        const tokenDecoded = this.tokenService.decode();
        const username = tokenDecoded.sub;
        const roles = tokenDecoded.roles;
        const email = tokenDecoded.email;
        const prenom = tokenDecoded.prenom;
        const nom = tokenDecoded.nom;
        const passwordChanged = tokenDecoded.passwordChanged;
        this._authenticatedUser.passwordChanged = passwordChanged;
        this._authenticatedUser.username = username;
        this._authenticatedUser.nom = nom;
        this._authenticatedUser.prenom = prenom;
        this._authenticatedUser.email = email;
        this._authenticatedUser.roles = roles;
        localStorage.setItem('autenticated', JSON.stringify(true));
        this.authenticated = true;
        this._loggedIn.next(true);

    }

    public hasRole(role: Role): boolean {
        const index = this._authenticatedUser.roles.findIndex(r => r.authority == role.authority);
        return index > -1 ? true : false;
    }
    lolo
    public registerAdmin(user: User) {
        this.isUserAvailable(user.username, user.email).subscribe(isAvailable => {
            if (isAvailable) {
                this.http.post<any>(this.API + 'api/users/save', user, { observe: 'response' }).subscribe(
                    resp => {
                        alert("User created");
                        this.router.navigate(['admin/login']);
                    },
                    (error: HttpErrorResponse) => {
                        console.log(error.error);
                    }
                );
            } else {
                alert("Username or email not available");

            }
        });
    }


    private isUserAvailable(username: string, email: string): Observable<boolean> {
        const usernameUrl = `${this.API}api/users/username/${username}`;
        const emailUrl = `${this.API}api/users/email/${email}`;

        const usernameAvailability$ = this.http.get<User>(usernameUrl).pipe(
            map(user => {
                return user == null;
            }),
            catchError(() => {
                return of(true);
            })
        );

        const emailAvailability$ = this.http.get<User>(emailUrl).pipe(
            map(user => {
                return user == null;
            }),
            catchError(() => {
                return of(true);
            })
        );

        return forkJoin([usernameAvailability$, emailAvailability$]).pipe(
            map(([isUsernameAvailable, isEmailAvailable]) => {
                return isUsernameAvailable && isEmailAvailable;
            })
        );
    }



    public logout() {
        this.tokenService.removeToken();
        localStorage.setItem('autenticated', JSON.stringify(false));
        this.authenticated = false;
        this._loggedIn.next(false);
        this._authenticatedUser = new User();
        this.router.navigate(['']);
    }
    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
    get authenticated(): boolean {
        return this._authenticated;
    }

    set authenticated(value: boolean) {
        this._authenticated = value;
    }
    get authenticatedUser(): User {
        return this._authenticatedUser;
    }

    set authenticatedUser(value: User) {
        this._authenticatedUser = value;
    }


}
