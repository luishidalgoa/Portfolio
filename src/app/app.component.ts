import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  darkmode!:boolean;

  public dark_mode: DarkModeService = inject(DarkModeService)
  
  ngOnInit(): void {
    this.dark_mode.darkMode.subscribe(darkMode => {
      this.darkmode = darkMode
    })
  }
  
}
