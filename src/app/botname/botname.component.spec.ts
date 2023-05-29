import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnameComponent } from './botname.component';

describe('BotnameComponent', () => {
  let component: BotnameComponent;
  let fixture: ComponentFixture<BotnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotnameComponent]
    });
    fixture = TestBed.createComponent(BotnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
