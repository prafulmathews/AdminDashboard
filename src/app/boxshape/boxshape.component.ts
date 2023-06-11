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
  constructor(public shareds: ServService){}

  ngOnInit() {}
  setvalue()
  {
    this.shareds.setshared(this.test);
  }
  
  public change_test(ev: any)
  {
    this.shareds.test_bs=ev.target.checked;
  }

  public change_round(ev: any)
  {
    this.shareds.round_bs=ev.target.checked;
    this.shareds.square_bs=false;
  }

  public change_sqaure(ev: any)
  {
    this.shareds.square_bs=ev.target.checked;
    this.shareds.round_bs=false;
  }
}