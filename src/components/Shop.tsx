import { Items } from './Items';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { ContextType, Game } from './util/Interfaces';

export const Shop = () => {
  const [games, setGames, empty, setEmpty, total, setTotal] = useOutletContext() as ContextType;

  const handleClick = (event: any) => {
    let id = event.currentTarget.dataset.id as number;
    console.log(`clicked on game with id ${id}`);

    let newGames = games;
    newGames.forEach(game => {
      if (game.id == id) {
        console.log('increment quantity');
        game.quantity++;
        setTotal(total + game.price);
        return;
      }
    });

    setGames(newGames);
    setEmpty(false);
  }

  return (
    <Div>
      <h1>All Games</h1>
      <Items games={games} handleClick={handleClick}></Items>
    </Div>
  )
}

const Div = styled.div`
  min-width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`