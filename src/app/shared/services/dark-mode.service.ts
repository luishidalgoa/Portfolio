import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  public darkMode!: BehaviorSubject<boolean>;
  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      const darkModeInLocalStorage = localStorage.getItem('darkMode');
  
      if (darkModeInLocalStorage !== null) {
        this.darkMode = new BehaviorSubject<boolean>(darkModeInLocalStorage === 'true');
      } else {
        localStorage.setItem('darkMode', 'true');
        this.darkMode = new BehaviorSubject<boolean>(true);
      }
    } else {
      // En caso de que localStorage no esté disponible
      console.warn('localStorage no está disponible en este entorno.');
      this.darkMode = new BehaviorSubject<boolean>(false); // Valor por defecto en caso de no estar en un navegador
    }
  }
  
  
  /**
   * Changes the current value of the dark mode observable to the opposite one.
   * @returns An observable with the new value of the dark mode.
   */
  public changeDarkMode() {
    this.darkMode.next(!this.darkMode.value);
    localStorage.setItem('darkMode', String(this.darkMode.value));
  }

}
