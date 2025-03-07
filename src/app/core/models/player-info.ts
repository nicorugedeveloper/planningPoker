export interface PlayerInfo{
  id: string,
  name: string,
  mode: 'player' | 'spectator',
  role: 'admin' | 'player',
  rank: 'owner' | 'participant',
  viewer: boolean,
  cardActive: boolean;
  selectedNumber: number | null
}
