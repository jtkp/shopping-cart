import { useState } from 'react';
import { Items } from './Items';

export const Shop = () => {
  let init = [
    {
      name: 'Grand Theft Auto V',
      image: '/here',
      price: 12,
    },
    {
      name: 'Valorant',
      image: '/there',
      price: 420,
    }
  ]
  const [items, setItems] = useState(init);

  // const key = '6cc02bd22dd4452bbe0efcabb76d2956';

  // async function getGames() {
  //     const response = await fetch(`https://api.rawg.io/api/games?key=${key}&metacritic=80,100&page_size=16`);
  //     const data = await response.json();
  //     const games = data['results'];
  //     return games;
  // }
  // getGames().then(games => {
  //     console.log(games);
  // })

  return (
    <div>
      <h1>Shop</h1>
      <Items games={items}></Items>
    </div>
  )
}