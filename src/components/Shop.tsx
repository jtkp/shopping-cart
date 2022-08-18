import { Items } from './Items';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { Game } from './util/Interfaces';

type ContextType = [
  Game[],
  number[],
  React.Dispatch<React.SetStateAction<number[]>>
];

export const Shop = () => {

  const [games, cart, setCart] = useOutletContext() as ContextType;

  const handleClick = (event: any) => {
    let id = event.currentTarget.dataset.id;
    console.log(`clicked on game with id ${id}`);
    let newCart = cart;
    console.log(newCart);
    newCart.push(id);
    console.log(newCart);
    setCart(newCart);
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