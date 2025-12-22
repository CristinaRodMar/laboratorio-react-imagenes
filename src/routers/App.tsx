import { BrowserRouter, Route, Routes } from "react-router-dom";
import { catsList } from "../pod/cats-lists/cat-list.mock"; 
import { dogsList } from "../pod/dog-list/dog-list.mock";    
import { AnimalList } from "../components/animalList";  
import { Navbar } from "../layout/nabvar";
import { Footer } from "../layout/footer";
import { Hero } from "../layout/hero-section";
import { Checkout } from "../layout/checkout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">  
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/cats" element={<AnimalList animals={catsList} />} />
            <Route path="/dogs" element={<AnimalList animals={dogsList} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}