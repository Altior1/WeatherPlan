import './App.css'
import { Routes, Route } from 'react-router-dom';
import FetchCountries from './components/FetchCountries';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/all_countries" element={<FetchCountries />} />
      </Routes>
    </>
  )
}

export default App
