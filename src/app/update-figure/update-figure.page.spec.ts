import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateFigurePage } from './update-figure.page';

describe('UpdateFigurePage', () => {
  let component: UpdateFigurePage;
  let fixture: ComponentFixture<UpdateFigurePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateFigurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
