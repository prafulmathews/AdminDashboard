import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { ServService } from '../serv.service';
@Component({
  selector: 'app-boxshape',
  templateUrl: './boxshape.component.html',
  styleUrls: ['./boxshape.component.css'],
  standalone:true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
})

export class BoxshapeComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  test=false;
  constructor(private shared: ServService){}

  setvalue()
  {
    this.shared.setshared(this.test);
  }
}