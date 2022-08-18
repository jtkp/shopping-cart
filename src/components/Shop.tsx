import { Items } from './Items';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { Game } from './util/Interfaces';

type ContextType = [
  Game[],
  React.Dispatch<React.SetStateAction<Game[]>>
];

export const Shop = () => {
  const [games, setGames] = useOutletContext() as ContextType;

  const handleClick = (event: any) => {
    let id = event.currentTarget.dataset.id as number;
    console.log(`clicked on game with id ${id}`);
    let newGames = games;
    newGames.forEach(game => {
      if (game.id == id) {
        console.log('increment quantity');
        game.quantity++;
        return;
      }
    });
    setGames(newGames);
  }

  return (
    <Div>
      <h1>Shop</h1>
      <Items games={games} handleClick={handleClick}></Items>
    </Div>
  )
}

const Div = styled.div`
  min-width: 100%;
  padding: 1rem;
`