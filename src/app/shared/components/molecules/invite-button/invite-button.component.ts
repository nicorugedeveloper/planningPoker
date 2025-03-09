import { Component} from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-invite-button',
  imports: [],
  standalone: true,
  templateUrl: './invite-button.component.html',
  styleUrl: './invite-button.component.scss'
})
export class InviteButtonComponent {
  @Input() disabled = false;
  @Output() invite = new EventEmitter<void>();

  onClick() {
    this.invite.emit();
  }
}
