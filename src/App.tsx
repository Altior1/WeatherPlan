import './App.css'
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import FetchCountries from './components/FetchCountries';
import Header from './components/Header';
import { FilterCountryContext } from './contexts/FilterCountryContext';

const initialFilterState: string | null = null;

const filterReducer = (state: string | null, action: { type: string; payload?: string | null }) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.payload || null;
      case 'CLEAR_FILTER':
        return null;
      default:
        return state;
    }
  };

function App() {
  const [filterCountry, dispatch] = useReducer(filterReducer, initialFilterState);


  return (
    <>
      <Header />
      <FilterCountryContext.Provider value={{ filterCountry, dispatch }}>
      <Routes>
        <Route path="/all_countries" element={<FetchCountries />} />
        </Routes>
        </FilterCountryContext.Provider>
    </>
  )
}

export default App
