import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxshapeComponent } from './boxshape.component';

describe('BoxshapeComponent', () => {
  let component: BoxshapeComponent;
  let fixture: ComponentFixture<BoxshapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxshapeComponent]
    });
    fixture = TestBed.createComponent(BoxshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
