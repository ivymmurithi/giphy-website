import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGifsComponent } from './display-gifs.component';

describe('DisplayGifsComponent', () => {
  let component: DisplayGifsComponent;
  let fixture: ComponentFixture<DisplayGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
