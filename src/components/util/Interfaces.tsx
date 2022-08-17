export interface Game {
  name: string;
  image: string;
  price: number;
}

export interface ItemProps {
  games: Game[];
}