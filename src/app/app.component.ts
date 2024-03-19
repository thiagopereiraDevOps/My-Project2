import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaiComponent } from './components/pai/pai.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Project2';
  informacao?: string;
  informacaoDoPai?: string;

  getInformacao(): void {
    this.informacao = 'Informação do filho para o pai';
  }

  recebeInformacaoDoPai(event: string): void {
    this.informacaoDoPai = event;
  }
}
