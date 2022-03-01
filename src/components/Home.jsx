import { Link } from "react-router-dom";
import imgBeers from "../assets/beers.png"
import imgRandomBeer from "../assets/random-beer.png"
import imgNewBeer from "../assets/new-beer.png"
import HomeItem from "./HomeItem";
import { description } from '../constants';

const styleCard = { display: "block", margin: "1rem 0", textDecoration: "none", color: "black" };

function Home() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Ironbeers
          </Link>
        </div>
      </nav>

      <div className="container pt-5">
        <Link to="/beers" style={styleCard}>
          <HomeItem
            title='All Beers'
            imgBeers={imgBeers}
            description={description}
          />
        </Link>  
       
        <Link to="/random-beer" style={styleCard}>
          <HomeItem
            title='Random Beer'
            imgBeers={imgRandomBeer}
            description={description}
          />
        </Link>

        <Link to="/new-beer" style={styleCard}>
          <HomeItem
            title='New Beer'
            imgBeers={imgNewBeer}
            description={description}
          />
        </Link>
      </div>
    </div>
  )
}

export default Home;