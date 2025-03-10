import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsContainerComponent } from '../../shared/components/molecules/cards-container/cards-container.component';
import { TableHeaderComponent } from '../../shared/components/organisms/table-header/table-header.component';
import { PlayerAvatarComponent } from "../../shared/components/atoms/player-avatar/player-avatar.component";



interface PlayerPosition {
  name: string | null;
  position: {
    top: string;
    left: string;
  };
  slot: number;
}
@Component({
  selector: 'app-game',
  imports: [CommonModule, CardsContainerComponent, TableHeaderComponent, PlayerAvatarComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  mainPlayer = {
    name: 'Luisa',
    initials: 'LU'
  };
  isModalOpen = false;

openModal() {
  this.isModalOpen = true;
}


  isInviting = false;


  playerSlots: PlayerPosition[] = [
    { name: null, position: { top: '11%', left: '25%' }, slot: 0 },
    { name: null, position: { top: '11%', left: '50%' }, slot: 1 },
    { name: null, position: { top: '11%', left: '75%' }, slot: 2 },
    { name: null, position: { top: '50%', left: '13%' }, slot: 3 },
    { name: null, position: { top: '50%', left: '87%' }, slot: 4 },
    { name: null, position: { top: '88%', left: '25%' }, slot: 5 },
    { name: null, position: { top: '88%', left: '75%' }, slot: 6 }
  ];

  private playersToInvite = [
    { name: 'Oscar', slot: 0 },
    { name: 'David', slot: 1 },
    { name: 'Albert', slot: 2 },
    { name: 'Vale', slot: 3 },
    { name: 'Pedro', slot: 4 },
    { name: 'Carlos', slot: 5 },
    { name: 'Nata', slot: 6 }
  ];

  async invitePlayers() {
    if (this.isInviting) return;

    this.isInviting = true;

    for (const player of this.playersToInvite) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.addPlayer(player.name, player.slot);
    }

    this.isInviting = false;
  }

  private addPlayer(playerName: string, slotIndex: number) {
    if (slotIndex >= 0 && slotIndex < this.playerSlots.length) {
      this.playerSlots[slotIndex].name = playerName;
    }
  }
}
