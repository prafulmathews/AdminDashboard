import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServService {
  private shared!: boolean;
  getshared(){
    return this.shared;
  }

  setshared(value: boolean)
  {
    this.shared=value;
  }
  // constructor() { }

  public test_bs=false;
  public purple_bc=false;
  public greeen_bc=false;
  public square_bs=false;
  public round_bs=false;
  public av1_ba=false;
  public av2_ba=false;
  public rule_re=false;
  public faq_re=false;
  public ai_re=false;
  constructor() {}

}


