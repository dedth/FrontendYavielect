import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: any[] = [];
  selectedPerson: any = null;

  constructor() {
    this.loadPeople();
  }

  private loadPeople() {
    this.people = [];
    this.people.push(
      {id: 1, name: 'Juan', age: 20, birthdate: '1990-01-01', state: true},
      {id: 2, name: 'Maria', age: 25, birthdate: '1998-02-11', state: true}
    );
  }

  addPerson(payload: any) {
    this.people.push(payload);
  }

  updatePerson(id: number, payload: any) {
    const index = this.people.findIndex(person => person.id === id);
    this.people[index] = payload;
  }

  deletePerson(id: number) {
    const index = this.people.findIndex(person => person.id === id);
    if (index > -1) {
      this.people.splice(index, 1);
    }
  }
}
