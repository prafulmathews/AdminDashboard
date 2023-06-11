import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServService } from '../serv.service';
import { NgModule } from '@angular/core';
import { BotpreviewComponent } from '../botpreview/botpreview.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-botname',
  templateUrl: './botname.component.html',
  styleUrls: ['./botname.component.css'],
  standalone:true,
  imports: [FormsModule,BotpreviewComponent,NgIf],
})
export class BotnameComponent {
  constructor(public shareds: ServService) {}

  ngOnInit(){}

  public getname(name: string)
  {
    this.shareds.botname_bn=name;
  }
}


