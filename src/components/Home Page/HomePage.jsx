import React, { Component } from "react";
import './HomePage.css';
import Heritage from '../../assets/Images/Heritage.svg';
import Nature from '../../assets/Images/Nature.svg';
import Spiritual from '../../assets/Images/Spiritual.svg';
import Food from '../../assets/Images/Food.svg';
import Rajasthan from '../../assets/Images/Rajasthan.svg';
import Kerala from '../../assets/Images/Kerala.svg';
import Goa from '../../assets/Images/Goa.png~';
import Karnataka from '../../assets/Images/Karnataka.svg';

class HomePage extends Component
{
     render(){

           const destinations = [
    {
      name: "Rajasthan",
      tagline: "Land Of Palaces & Deserts",
      image: Rajasthan,
    },
    {
      name: "Kerala",
      tagline: "God’s Own Country",
      image: Kerala,
    },
    {
      name: "Goa",
      tagline: "Beaches & Vibrance",
      image: Goa,
    },
    {
      name: "Karnataka",
      tagline: "Land Of Ancient Temples",
      image: Karnataka,
    },
  ];
          return(
               <section className="homepage">
                    <div className="homepagetop">
                         <div className="Discover">
                              <h3>Discover India</h3>
                              <p>A Journey Through Culture, Nature & Heritage </p>
                              
                              <button>Start Exploring</button>
                         </div>
                    <div className="homefeatures">
                         <div className="image">
                              <img src={Heritage} alt="Heritage" />
                              <h3>Heritage</h3>
                         </div>
                         <div className="image">
                              <img src={Nature} alt="Nature" />
                              <h3>Nature</h3>
                         </div>
                         <div className="image">
                              <img src={Spiritual} alt="Spiritual" />
                              <h3>Spiritual</h3>
                         </div>
                         <div className="image">
                              <img src={Food} alt="Food" />
                              <h3>Food</h3>
                         </div>

                    </div>
                    </div>

                    <div className="journey">
                         <h3>Join the Journey Through Ages</h3>
                         <h4>A land where every mile tells a story.</h4>
                         <p>From the snow-capped peaks of the Himalayas to the golden sands of Rajasthan, from the backwaters of Kerala to the vibrant festivals of Gujarat — India is a kaleidoscope of cultures, colors, and traditions. This website is your complete guide to exploring every corner of this incredible country.</p>
                         <p>Find detailed information about each state, uncover hidden gems, explore heritage sites, nature trails, spiritual journeys, local cuisines, and real traveler stories — all in one place. Whether you’re a first-time visitor or a passionate wanderer, let your next adventure begin here.</p>
                    </div>

                    <div className="discover">
                         <h3>Discover India’s most visited destinations</h3>
                         <p>where heritage, culture, and nature come together beautifully.</p>
                    </div>

                    <div className="destination-container">
      {destinations.map((place, index) => (
        <div
          key={index}
          className="destination-card"
          style={{ backgroundImage: `url(${place.image})` }}
        >
          <div className="overlay">
            <h3>{place.name}</h3>
            <p>{place.tagline}</p>
          </div>
        </div>
      ))}
    </div>

                    

                    
               </section>
          )
     }
};

export default HomePage;