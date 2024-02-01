import React  from 'react'
import ShowList from './features/showList';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Summary from './features/summary';
import MovieForm from './features/movieForm';
import './App.css'

function App() {

  
    return (
      <BrowserRouter>

      <Routes >
      
      <Route exact path='/' element={<ShowList />} />
      <Route path="/summary/:id" element={<Summary />} /> 
      <Route path='/form' element={ <MovieForm />}/>
     </Routes>
      </BrowserRouter>
    )
}

export default App;