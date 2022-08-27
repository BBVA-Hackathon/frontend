import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aforo from '../pages/Aforo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Aforo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
