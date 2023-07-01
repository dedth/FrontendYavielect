
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  loginForm!: FormGroup;
  toastr: any;
  

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
     private router:Router
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this.authService.login(username, password)
        .subscribe(
          response => {
            this.handleLoginSuccess(response);
          },
          error => {
            this.handleLoginError(error);
          }
        );
    }
  }
  
  handleLoginError(error: any) {
    // Lógica para manejar errores, como mostrar un mensaje de error al usuario.
    console.log('Error en el inicio de sesión:', error);
    // Puedes mostrar un mensaje de error en el formulario o utilizar una librería de notificaciones como ngx-toastr, por ejemplo:
    this.toastr.error('Error en el inicio de sesión. Verifica tus credenciales.', 'Error');
  }
  
  handleLoginSuccess(response: any) {
    // Lógica para manejar la respuesta del backend, como guardar el token de autenticación.
    const authToken = response.token;
    // Guarda el token en el almacenamiento local o en una variable de estado
    localStorage.setItem('authToken', authToken);
    // Redirige al usuario a otra página o realiza otras acciones necesarias
    this.router.navigate(['/menu']);
  }
  }
 

  

