import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (

    <div className="App">
     <Navbar />
      <div className="container">
      <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:alpha3Code" element={<CountryDetails />} />
      
      </Routes>
      </div>
    </div>
  );
}

export default App;
