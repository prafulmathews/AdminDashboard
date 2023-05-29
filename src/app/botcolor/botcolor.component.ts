import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { BoxshapeComponent } from '../boxshape/boxshape.component';
import { ServService } from '../serv.service';
@Component({
  selector: 'app-botcolor',
  templateUrl: './botcolor.component.html',
  styleUrls: ['./botcolor.component.css'],
  standalone:true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule, BoxshapeComponent],
})
export class BotcolorComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  test=true;

}
