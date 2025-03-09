import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-player-avatar',
  imports: [],
  templateUrl: './player-avatar.component.html',
  styleUrl: './player-avatar.component.scss'
})
export class PlayerAvatarComponent {
  @Input() initials!: string;
}
