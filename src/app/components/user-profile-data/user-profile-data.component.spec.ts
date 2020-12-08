import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDataComponent } from './user-profile-data.component';

describe('UserProfileDataComponent', () => {
  let component: UserProfileDataComponent;
  let fixture: ComponentFixture<UserProfileDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
