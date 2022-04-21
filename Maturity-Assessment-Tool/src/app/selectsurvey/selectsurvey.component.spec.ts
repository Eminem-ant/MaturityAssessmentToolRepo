import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsurveyComponent } from './selectsurvey.component';

describe('SelectsurveyComponent', () => {
  let component: SelectsurveyComponent;
  let fixture: ComponentFixture<SelectsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
