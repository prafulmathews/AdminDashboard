import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { BoxshapeComponent } from '../boxshape/boxshape.component';
import { ServService } from '../serv.service';
import { BotpreviewComponent } from '../botpreview/botpreview.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-botcolor',
  templateUrl: './botcolor.component.html',
  styleUrls: ['./botcolor.component.css'],
  standalone:true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule, BoxshapeComponent,BotpreviewComponent,NgIf],
})
export class BotcolorComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  test=false;

  constructor(public shareds: ServService) {}

  ngOnInit(){}

  getvalue()
  {
    this.test=this.shareds.getshared();
  }

  public change_test(ev: any)
  {
    this.shareds.test_bs=ev.target.checked;
    
  }

  public change_green(ev: any)
  {
    this.shareds.greeen_bc=ev.target.checked;
    this.shareds.purple_bc=false;
    // var box = document.getElementById("trial");
    // this.shareds.test_box="green";
    // box!.style.backgroundColor="green";
    this.shareds.onclick("green");
  }

  public change_purple(ev: any)
  {
    this.shareds.purple_bc=ev.target.checked;
    this.shareds.greeen_bc=false;
    //var box=document.getElementsByClassName("title")[0];
    // var box = document.getElementById("trial");
    // this.shareds.test_box="purple";
    // this.box!.style.backgroundColor="purple";
    this.shareds.onclick("purple"); 
  }

}
