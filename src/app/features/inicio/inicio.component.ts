import { Component } from '@angular/core';
import { PlayerRequest } from '../../core/models/player-request';
import { FormComponent } from '../../shared/components/molecules/form/form.component';
import { ModalComponent } from '../../shared/components/organisms/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [FormComponent,FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  onFormSubmit(playerRequest: PlayerRequest) {
    console.log('Datos del jugador:', playerRequest);
    // Lógica para crear/unión a partida

    // Cerrar modal mediante su ID
    const modal = document.getElementById('gameStartModal');
    if(modal) modal.classList.remove('show');
  }
}
