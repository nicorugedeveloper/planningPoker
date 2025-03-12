import { Component } from '@angular/core';
import { PlayerRequest } from '../../core/models/player-request';
import { FormComponent } from '../../shared/components/molecules/form/form.component';
import { ModalComponent } from '../../shared/components/organisms/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/components/atoms/input/input.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  imports: [FormComponent,FormsModule,InputComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  constructor(private router: Router) {}

navigateToAbout() {
  this.router.navigate(['/game']);
}
  onFormSubmit(playerRequest: PlayerRequest) {
    console.log('Datos del jugador:', playerRequest);
    // Lógica para crear/unión a partida

    // Cerrar modal mediante su ID
    const modal = document.getElementById('gameStartModal');
    if(modal) modal.classList.remove('show');
  }

  
}
