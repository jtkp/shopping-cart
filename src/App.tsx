import { Routes, Route } from 'react-router-dom';
import { Base } from './components/Base';
import { Home } from './components/Home';
import { Shop } from './components/Shop';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Base />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
