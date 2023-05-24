import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilListComponent } from './automovil-list.component';

describe('AutomovilListComponent', () => {
  let component: AutomovilListComponent;
  let fixture: ComponentFixture<AutomovilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomovilListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomovilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
