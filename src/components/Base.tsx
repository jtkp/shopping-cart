import React from 'react';
import { Header } from './util/Header';
import { Footer } from './util/Footer';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Game } from './util/Interfaces';

let init = [
  {
    id: 123,
    name: 'Fetching Catalog...',
    image: '',
    price: 0,
    quantity: 0,
  },
];

export const Base = () => {
  const [games, setGames] = useState<Game[]>(init);
  const [empty, setEmpty] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const key = '6cc02bd22dd4452bbe0efcabb76d2956';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=${key}&metacritic=80,100&page_size=20`);
      const data = await response.json();
      const gameList = data['results'].map((game: any) => {
        return {
          id: game.id,
          name: game.name,
          image: game['background_image'],
          price: Math.floor((game.id / 100) + 5),
          quantity: 0,
        }
      });
      console.log(gameList);
      setGames(gameList);
    }

    fetchData().catch(console.error);
  }, []);

  return (
    <Div>
      <Header quantity={quantity}></Header>
      <Outlet context={[games, setGames, empty, setEmpty, total, setTotal, quantity, setQuantity]}></Outlet>
      <Footer></Footer>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`