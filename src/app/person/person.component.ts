import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PeopleService} from "./people.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  name: string = '';
  age: number = 0;
  birthdate: Date = new Date();
  state: boolean = false;

  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder,
              private peopleService: PeopleService) {
    if (this.peopleService.selectedPerson) {
      this.form = formBuilder.group({
        id: [this.peopleService.selectedPerson.id],
        name: [this.peopleService.selectedPerson.name, [Validators.required, Validators.minLength(3)]],
        age: [this.peopleService.selectedPerson.age, [Validators.min(1)]],
        birthdate: [this.peopleService.selectedPerson.birthdate],
        state: [this.peopleService.selectedPerson.state, []],
      });
    } else {
      this.form = formBuilder.group({
        id: [0],
        name: ['', [Validators.required, Validators.minLength(3)]],
        age: [0, [Validators.min(1)]],
        birthdate: [new Date()],
        state: [false, []],
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.addPerson();
    } else {
      alert('Formulario No Valido');
    }
  }

  addPerson() {
    this.peopleService.addPerson(this.form.value);
    console.log(this.peopleService.people);
  }

  updatePerson() {
    this.peopleService.updatePerson(this.idField.value, this.form.value);
    console.log(this.peopleService.people);
  }

  validateForm() {
    if (this.name === '' && this.name.length <= 3) {

    }
  }

  get idField() {
    return this.form.controls['id'];
  }
}
