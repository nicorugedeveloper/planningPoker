
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerRequest } from '../../../../core/models/player-request';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isVisible: boolean = false; // Recibe la visibilidad del modal
  @Output() closeModal = new EventEmitter<void>(); // Emite el evento para cerrar el modal

  // Método para cerrar el modal
  onClose() {
    this.closeModal.emit();
  }

}
