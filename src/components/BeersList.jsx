import { Component } from "react";
import axios from 'axios';
import { BASE_URL, BEERS } from "../constants";

import Header from "./Header";
import { Link } from "react-router-dom";

class BeersList extends Component {
  state = { beersList: [] }

  getAllBeers = () => {
    axios.get(`${BASE_URL}/${BEERS}`)
    .then(responseFromApi => {
      console.log(responseFromApi);
      this.setState({
        beersList: responseFromApi.data
      })
    })
  }
 

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    const { beersList } = this.state;
    return(
      <>
        <Header />
        <div className="text-center p-5">
          {beersList.map(beer => (
            <div className="border-bottom" key={beer._id}>
              <Link
                style={{ display: "block", margin: "1rem 0", textDecoration: "none", color: "black"}}
                to={`/beers/${beer._id}`}
                key={beer._id}
              >
                <div className="d-flex">
                  <img className="align-self-center" src={beer.image_url} 
                    alt={beer._id} 
                    width="50"
                  />
                  <div className="col">
                    <h4 className="p-2">
                      {beer.name}
                    </h4>
                    <div style={{color: 'gray', fontWeight: 'bold'}} className="p-2">
                      {beer.tagline}
                    </div> 
                    <span style={{fontSize: 10, fontWeight: 'bold'}} className="p-2">Created By:</span>
                    <span style={{fontSize: 10}} className="p-2">
                      {beer.contributed_by}
                    </span>
                  </div>  
                </div>
              </Link>
            </div>
          ))}
        </div>
     </> 
    );
  }  
}

export default BeersList;