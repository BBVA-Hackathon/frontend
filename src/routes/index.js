import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aforo from '../pages/Aforo';
import Layout from '../layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<Aforo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
