import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/components/atoms/input/input.component';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule,FormsModule, InputComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  partidaNombre: string = '';

  crearPartida() {
    console.log('Partida creada:', this.partidaNombre);
  }
}
