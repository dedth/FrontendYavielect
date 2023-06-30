import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }

    const user = this.registerForm.value;

    this.usersService.registerUser(user)
      .subscribe(
        (response: any) => {
          console.log(response); // Maneja la respuesta del backend
          // Aquí puedes realizar acciones adicionales, como redireccionar a una página de éxito o mostrar un mensaje de confirmación.
        },
        (error: any) => {
          console.error(error); // Maneja los errores
          // Aquí puedes realizar acciones adicionales, como mostrar un mensaje de error al usuario.
        }
      );
  }
}
