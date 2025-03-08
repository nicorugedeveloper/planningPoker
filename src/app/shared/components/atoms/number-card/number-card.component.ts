import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-number-card',
  imports: [],
  templateUrl: './number-card.component.html',
  styleUrl: './number-card.component.scss'
})
export class NumberCardComponent {
  @Input() number!: number;

  onSelect() {
    console.log(`Carta seleccionada: ${this.number}`);
  }
}
