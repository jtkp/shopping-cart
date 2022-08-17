import { useEffect, useState } from 'react';
import { Items } from './Items';
import { Game } from './util/Interfaces';

let init = [
  {
    name: 'Fetching Catalog...',
    image: '',
    price: 0,
  },
]

export const Shop = () => {
  const [items, setItems] = useState(init);

  const key = '6cc02bd22dd4452bbe0efcabb76d2956';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=${key}&metacritic=80,100&page_size=16`);
      const data = await response.json();
      const gameList = data['results'].map((game: any) => {
        return {
          name: game.name,
          image: game['background_image'],
          price: 12,
        }
      });
      setItems(gameList);
    }

    fetchData().catch(console.error);
  }, [])

  return (
    <div>
      <h1>Shop</h1>
      <Items games={items}></Items>
    </div>
  )
}