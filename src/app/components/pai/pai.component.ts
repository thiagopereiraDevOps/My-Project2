import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent {
  @Input() recebeInformacaoDoFilho?: string;
  @Output() enviaInformacaoParaOFilho = new EventEmitter<string>();

  disparaInformacaoParaOFilho(): void {
    this.enviaInformacaoParaOFilho.emit('Envia informação para o filho');
  }
}
