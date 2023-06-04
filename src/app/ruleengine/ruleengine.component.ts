import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-ruleengine',
  templateUrl: './ruleengine.component.html',
  styleUrls: ['./ruleengine.component.css'],
  standalone:true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
})
export class RuleengineComponent {
  constructor(public shareds: ServService) {}

  ngOnInit(){}

  public change_test(ev: any)
  {
    this.shareds.test_bs=ev.target.checked;
  }

  public change_rule(ev: any)
  {
    this.shareds.rule_re=ev.target.checked;
  }

  public change_faq(ev: any)
  {
    this.shareds.faq_re=ev.target.checked;
  }

  public change_ai(ev: any)
  {
    this.shareds.ai_re=ev.target.checked;
  }
}
