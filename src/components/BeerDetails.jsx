import { Component } from "react";
import axios from 'axios';
import { BASE_URL, BEERS } from "../constants";
import Header from "./Header";
import Beer from "./Beer";
 

class BeerDetails extends Component {

  state = {
    beerDetails: {}
  }
 
  getBeer(beerId) {
    axios.get(`${BASE_URL}/${BEERS}/${beerId}`)
    .then(responseFromApi => {
      console.log(responseFromApi);
      this.setState({
        beerDetails: responseFromApi.data
      })
    })
  }
 
  componentDidMount() {
    console.log(this.props);
   // const { beerId } = this.props.match.params;
   // this.getBeer(beerId);
    this.getBeer('5fb6a86265b9c209606e10e2');
  }

  render() {
    const { image_url, name, description, tagline, contributed_by, attenuation_level, first_brewed, _id: beerId } = this.state.beerDetails;
    return(
      <>
        <Header />
        <Beer
          name={name}
          imageUrl={image_url}
          description={description}
          tagline={tagline}
          contributedBy={contributed_by}
          attenuationLevel={attenuation_level}
          firstBrewed={first_brewed}
          beerId={beerId}
        />
      </>
    );
  }
}

export default BeerDetails