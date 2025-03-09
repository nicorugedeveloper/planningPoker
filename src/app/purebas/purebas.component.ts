import { Component } from '@angular/core';
import { PlayerAvatarComponent } from '../shared/components/atoms/player-avatar/player-avatar.component';
import { TableHeaderComponent } from '../shared/components/organisms/table-header/table-header.component';


@Component({
  selector: 'app-purebas',
  imports: [TableHeaderComponent],
  templateUrl: './purebas.component.html',
  styleUrl: './purebas.component.scss'
})
export class PurebasComponent {

}
