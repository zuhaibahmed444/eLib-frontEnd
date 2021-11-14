import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermininavComponent } from './usermininav.component';

describe('UsermininavComponent', () => {
  let component: UsermininavComponent;
  let fixture: ComponentFixture<UsermininavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermininavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermininavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
