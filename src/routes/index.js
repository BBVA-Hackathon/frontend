import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aforo from '../pages/Aforo';
<<<<<<< HEAD
import Layout from '../layout';
=======
>>>>>>> main

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route element={<Layout />}>
          <Route path='' element={<Aforo />}></Route>
        </Route>
=======
        <Route path='/' element={<Aforo />}></Route>
>>>>>>> main
      </Routes>
    </BrowserRouter>
  );
}

export default App;
