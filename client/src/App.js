import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import PetForm from './components/PetForm';
import DisplayAll from './components/DisplayAll';
import OnePet from './components/OnePet';
import EditOne from './components/EditOne';

function App() {
  const [allPets, setAllPets] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<DisplayAll allPets={allPets} setAllPets={setAllPets}/>}/>
        <Route path='/newEntry/form' element={<PetForm allPets={allPets} setAllPets={setAllPets}/>}/>
        <Route path='/onePet/:id' element={<OnePet/>}/>
        <Route path='/editPet/:id' element={<EditOne/>}/>
      </Routes>
    </div>
  );
}

export default App;
