import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteUserComponent } from './favorite-user.component';

describe('FavoriteUserComponent', () => {
  let component: FavoriteUserComponent;
  let fixture: ComponentFixture<FavoriteUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
