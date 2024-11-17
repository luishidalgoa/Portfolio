import { Component } from '@angular/core';

@Component({
  selector: 'app-clipboard-button-component',
  templateUrl: './clipboard-button-component.component.html',
  styleUrl: './clipboard-button-component.component.scss'
})
export class ClipboardButtonComponentComponent {
  copy(){
    const span = document.querySelector('.copy-text') as HTMLSpanElement;
    const button = document.querySelector('.copy-to-clipboard-button') as HTMLButtonElement;
    span.innerHTML = 'Copiado';
    setTimeout(() => {
      span.innerHTML = 'Copiar';
    },1000)
  }
}
