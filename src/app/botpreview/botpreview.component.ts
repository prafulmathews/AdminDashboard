import { Component, isStandalone } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-botpreview',
  templateUrl: './botpreview.component.html',
  standalone:true,
  styleUrls: ['./botpreview.component.css']
})
export class BotpreviewComponent {

  constructor(public shareds: ServService) {
    // var box=document.getElementById("trial");
    // box!.style.backgroundColor=this.shareds.test_color;
  }
  ngOnInit(){
    if(this.shareds.subsVar==undefined)
  {
    this.shareds.subsVar=this.shareds.invoke_changecolor_bp.subscribe((name: string)=>{this.changecolor(name);});
  }
  var box=document.getElementById("trial");
  box!.style.backgroundColor=this.shareds.test_color;
  }

  public changecolor(name: string)
  {
    var box=document.getElementById("trial");
    // box!.style.backgroundColor="blue";
    // this.shareds.test_color="blue";
    if(name=="purple")
    {
      box!.style.backgroundColor="purple";
      this.shareds.test_color="purple";
    }
    if(name=="green")
    {
      box!.style.backgroundColor="green";
      this.shareds.test_color="green";
    }
  }

}