import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroupsComponent } from './nested-form-groups.component';

describe('NestedFormGroupsComponent', () => {
  let component: NestedFormGroupsComponent;
  let fixture: ComponentFixture<NestedFormGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
