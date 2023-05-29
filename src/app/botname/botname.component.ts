import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-botname',
  templateUrl: './botname.component.html',
  styleUrls: ['./botname.component.css'],
  standalone:true,
  imports: [FormsModule],
})
export class BotnameComponent {
  name=''
}
