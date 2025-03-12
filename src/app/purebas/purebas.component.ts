import { Component, OnInit } from '@angular/core';
import { PlayerAvatarComponent } from '../shared/components/atoms/player-avatar/player-avatar.component';
import { TableHeaderComponent } from '../shared/components/organisms/table-header/table-header.component';
import { SocketService } from '../socket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-purebas',
  imports: [CommonModule],
  templateUrl: './purebas.component.html',
  styleUrl: './purebas.component.scss'
})
export class PurebasComponent /* implements OnInit */ {

  copyLink() {
    const inputElement = document.getElementById("inviteLink") as HTMLInputElement;
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para móviles
    navigator.clipboard.writeText(inputElement.value).then(() => {
      alert("¡Enlace copiado al portapapeles!");
    });
  }

  players: any[] = [];

    constructor(private socketService: SocketService) {}
/*
    ngOnInit(): void {
        this.socketService.onUpdatePlayers((players) => {
            this.players = players;
        });
    }

    joinGame() {
        const gameId = 'partida-123'; // Obtén el gameId del enlace
        const playerName = 'Jugador1'; // Obtén el nombre del jugador
        this.socketService.joinGame(gameId, playerName);
    } */

}
