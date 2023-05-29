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
}


