import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserallbooksComponent } from './userallbooks.component';

describe('UserallbooksComponent', () => {
  let component: UserallbooksComponent;
  let fixture: ComponentFixture<UserallbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserallbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
