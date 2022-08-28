import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Aforo from '../pages/Aforo';
import Layout from '../layout';
import ListGrid from '../pages/ListGrid';
import ListMap from '../pages/ListMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Aforo />}>
            <Route path='list' element={<ListGrid />} />
            <Route path='map' element={<ListMap />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
