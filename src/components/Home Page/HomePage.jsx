import React, { Component } from "react";
import './HomePage.css';
import Heritage from '../../assets/Images/Heritage.svg';
import Nature from '../../assets/Images/Nature.svg';
import Spiritual from '../../assets/Images/Spiritual.svg';
import Food from '../../assets/Images/Food.svg';
import Rajasthan from '../../assets/Images/Rajasthan.svg';
import Kerala from '../../assets/Images/Kerala.svg';
import Goa from '../../assets/Images/Goa.png';
import Karnataka from '../../assets/Images/Karnataka.svg';
import Heritage1 from '../../assets/Images/Heritage.png';
import Spiritual1 from '../../assets/Images/Spiritual.png';
import Nature1 from '../../assets/Images/Nature.png';
import Adventure1 from '../../assets/Images/Adventures.png';
import winterImg from '../../assets/Images/WinterImage.svg';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Traveller1 from '../../assets/Images/Traveller1.svg';
import Traveller2 from '../../assets/Images/Traveller2.svg';
import Traveller3 from '../../assets/Images/Traveller3.svg';

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

  const themes = [
    {
      image: Heritage1,
      title: "Heritage",
      description:
        "Step into India’s Regal Past Through Its Majestic Forts, Palaces & Ancient Ruins. Experience The Tales of Glory, Empire & Timeless Artistry.",
    },
    {
      image: Nature1,
      title: "Nature",
      description:
        "From The Misty Himalayas To The Serene Backwaters And Golden Deserts, India’s Landscape Has No Parallel. Explore Nature In Every Form — Tropical & Breathtakingly Beautiful.",
    },
    {
      image: Spiritual1,
      title: "Spiritual",
      description:
        "Journey Through Sacred Temples, Mosques, Churches, And Monasteries. Seek Peace, Positive Vibes, Devotion, And The Spiritual Energy That Defines A Diverse Nation.",
    },
    {
      image: Adventure1,
      title: "Adventure",
      description:
        "Feel The Thrill With Activities Like Trekking, Rafting, Skydiving & More — Adventure Awaits For The Brave & Curious.",
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

    <div className="homepagefea">
     <h3>Explore by Theme</h3>

     <div className="themes-container">
        {themes.map((theme, index) => (
          <div className="theme-card" key={index}>
            <div className="theme-image">
              <img src={theme.image} alt={theme.title} />
            </div>
            <div className="theme-content">
       <h3>{theme.title}</h3>
            <p>{theme.description}</p>
            <button>Start Exploring</button>
            </div>
            
          </div>
        ))}
      </div>

    </div>

    <div className="seasonal">
     <h3>Seasonal Suggestions</h3>
     <div className="winter-card">
      <div>
        <IoArrowBackCircleOutline className="arrows"/>
      </div>
      <div className="text-box">
        <h2 className="title">
          Winter Wonders <span>(November – February)</span>
        </h2>

        <h3 className="subtitle">Best Places to Visit in Winter 2025</h3>

        <p className="description">
          Experience the charm of snow-covered mountains, desert festivals, and cozy hill stations.
          <br />
          Explore Shimla, Manali, Kashmir, Udaipur, or the magical{" "}
          Rann of Kutch under the stars.
        </p>
      </div>

      <div className="image-box">
        <img src={winterImg} alt="Winter Destination" />
      </div>

      <div>
        <IoArrowForwardCircleOutline className="arrows"/>
      </div>

     </div>
    </div>

    <div className="travelstories">
      <h3>Traveler Stories</h3>
      <div className="stories">
        <div>
          <img src={Traveller1} alt="" />
          <h3>Ananya Sharma,<span>New Delhi</span></h3>
          <h4>My First Trip to Varanasi – A Spiritual Awakening</h4>
          <p>Varanasi wasn’t just a destination — it was an experience that touched my soul. Watching the Ganga Aarti under the twilight sky made me feel the divine rhythm of life. The city breathes spirituality at every corner.</p>
          <a href="">Read More......</a>
        </div>

         <div>
          <img src={Traveller2} alt="" />
          <h3>Rohit Verma,<span> Bengaluru</span></h3>
          <h4>Trekking: My First Step into the Clouds</h4>
          <p>As a first-time trekker, the Triund trail in Himachal Pradesh challenged me but rewarded me with views I’ll never forget. Camping under a million stars changed how I see adventure forever..  </p>
          <a href="">Read More......</a>
        </div>

         <div>
          <img src={Traveller3} alt="" />
          <h3>Ayesha Khan, <span>Lucknow</span></h3>
          <h4>Street Food Safari in Old Delhi</h4>
          <p>From spicy chaat to creamy kulfi, every bite in Old Delhi was a celebration of flavors. Walking through Chandni Chowk’s lanes, I realized that food here is not just a meal — it’s a story of culture.</p>
          <a href="">Read More......</a>
        </div>

      </div>

    </div>

                    

                    
               </section>
          )
     }
};

export default HomePage;