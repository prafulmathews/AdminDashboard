import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotcolorComponent } from './botcolor.component';

describe('BotcolorComponent', () => {
  let component: BotcolorComponent;
  let fixture: ComponentFixture<BotcolorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotcolorComponent]
    });
    fixture = TestBed.createComponent(BotcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
