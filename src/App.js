import { Route, Routes } from "react-router";
import BeerDetails from "./components/BeerDetails";
import BeersList from "./components/BeersList";
import Home from "./components/Home";
import RandomBeerDetails from "./components/RamdonBeerDetails";

function App() {
  return (
    <div className="App">
        <div className="container p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<BeersList />} />
            <Route path="/beers/:beerId" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeerDetails />} />
            {/* <Route path="/new-beer" element="" /> */}
          </Routes>
        </div>
    </div>
  );
}

export default App;
