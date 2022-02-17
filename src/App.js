import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/countries';
import CountriesFilter from './components/CountriesFilter';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Countries />} />
          <Route path='/filter' element={<CountriesFilter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
