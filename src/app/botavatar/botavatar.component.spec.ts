import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotavatarComponent } from './botavatar.component';

describe('BotavatarComponent', () => {
  let component: BotavatarComponent;
  let fixture: ComponentFixture<BotavatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotavatarComponent]
    });
    fixture = TestBed.createComponent(BotavatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
