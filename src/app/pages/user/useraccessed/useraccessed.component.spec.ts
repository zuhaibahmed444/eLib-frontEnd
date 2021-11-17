import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccessedComponent } from './useraccessed.component';

describe('UseraccessedComponent', () => {
  let component: UseraccessedComponent;
  let fixture: ComponentFixture<UseraccessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraccessedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
