import { Component, Input } from '@angular/core';
import { PlayerAvatarComponent } from '../../atoms/player-avatar/player-avatar.component';
import { InviteButtonComponent } from '../../molecules/invite-button/invite-button.component';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-header',
  imports: [ PlayerAvatarComponent, InviteButtonComponent],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
  @Input() playerInitials: string = 'LU';
  @Input() isInviting = false;
  @Output() invitePlayersEvent = new EventEmitter<void>(); // Emite evento al padre

  invitePlayers() {
    this.invitePlayersEvent.emit();
  }
}
