import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  public darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  public changeDarkMode() {
    this.darkMode.next(!this.darkMode.value);
  }
  
}
