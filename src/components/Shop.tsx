import { Items } from './Items';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { Game } from './util/Interfaces';

export const Shop = () => {

  const games = useOutletContext() as Game[];
  console.log(games);

  const handleClick = (event: any) => {
    let id = event.currentTarget.dataset.id;
    console.log(`clicked on game with id ${id}`);
  }

  return (
    <Div>
      <h1>Shop</h1>
      <Items games={games} handleClick={handleClick}></Items>
    </Div>
  )
}

const Div = styled.div`
  background-color: rgb(240, 240, 240);
  min-width: 100%;
  padding: 1rem;
`