import { Component, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlayerRequest } from '../../../../core/models/player-request';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';


@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule, ButtonComponent,InputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  playerRequest: PlayerRequest = { name: '', playerMode: 'player' }; // Modelo del formulario
  @Output() submitForm = new EventEmitter<PlayerRequest>(); // Emite el evento al enviar el formulario

  // Método para manejar el envío del formulario
  onSubmit() {
    this.submitForm.emit(this.playerRequest);
  }
}
