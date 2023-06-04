import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-botavatar',
  templateUrl: './botavatar.component.html',
  styleUrls: ['./botavatar.component.css'],
  standalone:true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
})
export class BotavatarComponent {
  constructor(public shareds: ServService) {}

  ngOnInit(){}

  public change_test(ev: any)
  {
    this.shareds.test_bs=ev.target.checked;
  }

  public change_av1(ev: any)
  {
    this.shareds.av1_ba=ev.target.checked;
  }

  public change_av2(ev: any)
  {
    this.shareds.av2_ba=ev.target.checked;
  }

}
