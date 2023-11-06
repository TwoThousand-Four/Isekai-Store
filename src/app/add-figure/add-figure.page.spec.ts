import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFigurePage } from './add-figure.page';

describe('AddFigurePage', () => {
  let component: AddFigurePage;
  let fixture: ComponentFixture<AddFigurePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddFigurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
