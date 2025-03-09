import { Component, Input } from '@angular/core';
import { PlayerAvatarComponent } from '../../atoms/player-avatar/player-avatar.component';
import { InviteButtonComponent } from '../../molecules/invite-button/invite-button.component';

@Component({
  selector: 'app-table-header',
  imports: [ PlayerAvatarComponent, InviteButtonComponent],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {

  @Input() playerInitials!: string;
  @Input() isInviting = false;


  invitePlayers() {
    console.log('Invitando jugadores...');
  }
}
