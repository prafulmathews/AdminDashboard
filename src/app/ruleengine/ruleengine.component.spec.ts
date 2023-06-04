import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleengineComponent } from './ruleengine.component';

describe('RuleengineComponent', () => {
  let component: RuleengineComponent;
  let fixture: ComponentFixture<RuleengineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleengineComponent]
    });
    fixture = TestBed.createComponent(RuleengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
