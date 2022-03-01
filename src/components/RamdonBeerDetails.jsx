import { Component } from "react";
import axios from 'axios';
import { BASE_URL, BEERS, RANDOM } from "../constants";
import Header from "./Header";
import Beer from "./Beer";
 

class RandomBeerDetails extends Component {

  state = {
    randomBeerDetail: {}
  }
 
  getRandomBeer(beerId) {
    axios.get(`${BASE_URL}/${BEERS}/${RANDOM}`)
    .then(responseFromApi => {
      console.log(responseFromApi);
      this.setState({
        randomBeerDetail: responseFromApi.data
      })
    })
  }
 
  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    const { image_url, name, description, tagline, contributed_by, attenuation_level, first_brewed, _id: beerId } = this.state.randomBeerDetail;
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

export default RandomBeerDetails;