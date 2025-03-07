import { Injectable } from '@angular/core';
import { PlayerInfo } from '../../models/player-info';
import { PlayerRequest } from '../../models/player-request';
import { Card } from '../../models/card';
import { selectOptions } from '../../models/select-option';
@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  private players: PlayerInfo[] = [];
  private cards: Card[] = [];
  private gameStarted: boolean = false;

  constructor() {
    this.initializeCards();
  }

  private initializeCards(): void {
    const cardNumbers = [1, 2, 3, 5, 8, 13, 20, 40, 100];
    this.cards = cardNumbers.map(number => ({
      cardActive: false,
      cardNumber: number,
      votingNumber: null
    }));
  }

  addPlayer(request: PlayerRequest): PlayerInfo {
    const newPlayer: PlayerInfo = {
      id: Math.random().toString(36).substr(2, 9),
      name: request.name,
      mode: request.playerMode,
      role: 'player',
      rank: 'participant',
      viewer: request.playerMode === 'spectator',
      cardActive: false,
      selectedNumber: null
    };
    this.players.push(newPlayer);
    return newPlayer;
  }

  getPlayers(): PlayerInfo[] {
    return this.players;
  }

  getCards(): Card[] {
    return this.cards;
  }

  startGame(): void {
    this.gameStarted = true;
    // Lógica adicional para iniciar el juego
  }

  selectCard(playerId: string, cardNumber: number): void {
    const player = this.players.find(p => p.id === playerId);
    if (player) {
      player.selectedNumber = cardNumber;
      const card = this.cards.find(c => c.cardNumber === cardNumber);
      if (card) {
        card.votingNumber = cardNumber;
      }
    }
  }

  resetGame(): void {
    this.players.forEach(player => {
      player.selectedNumber = null;
    });
    this.cards.forEach(card => {
      card.votingNumber = null;
    });
    this.gameStarted = false;
  }
}
