import { CommonModule } from '@angular/common';
import { NumberCardComponent } from './../../atoms/number-card/number-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  imports: [NumberCardComponent,CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss'
})
export class CardsContainerComponent {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
