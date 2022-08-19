export interface Game {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface ItemProps {
  games: Game[];
  handleClick: any;
}

export type ContextType = [
  Game[],
  React.Dispatch<React.SetStateAction<Game[]>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];