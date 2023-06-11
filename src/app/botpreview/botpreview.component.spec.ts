import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotpreviewComponent } from './botpreview.component';

describe('BotpreviewComponent', () => {
  let component: BotpreviewComponent;
  let fixture: ComponentFixture<BotpreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotpreviewComponent]
    });
    fixture = TestBed.createComponent(BotpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
