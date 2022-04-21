import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectprojectComponent } from './selectproject.component';

describe('SelectprojectComponent', () => {
  let component: SelectprojectComponent;
  let fixture: ComponentFixture<SelectprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
