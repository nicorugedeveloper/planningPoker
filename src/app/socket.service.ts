import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() {
      this.socket = io('http://localhost:3000'); // Conéctate al servidor backend
  }

  // Unirse a una partida
  joinGame(gameId: string, playerName: string) {
      this.socket.emit('joinGame', gameId, playerName);
  }

  // Escuchar actualizaciones de jugadores
  onUpdatePlayers(callback: (players: any[]) => void) {
      this.socket.on('updatePlayers', callback);
  }
}
