export interface Game {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface ItemProps {
  games: Game[];
  handleClick: any;
}