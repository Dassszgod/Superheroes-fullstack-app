import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SuperheroList from './views/superheroList';
import SuperheroForm from './views/superheroForm';
import SuperheroDetails from './views/superheroDetails';
import SuperheroEdit from './views/SuperheroEdit';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<SuperheroList/>}/>
        <Route path="/create" element={<SuperheroForm/>}/>
        <Route path='/details/:id' element={<SuperheroDetails/>}/>
        <Route path='/edit/:id' element={<SuperheroEdit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
