import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquestiondetailsComponent } from './viewquestiondetails.component';

describe('ViewquestiondetailsComponent', () => {
  let component: ViewquestiondetailsComponent;
  let fixture: ComponentFixture<ViewquestiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquestiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquestiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
