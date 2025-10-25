import React from "react";
import './statesofIndia.css';
import Jammu from '../../assets/Images/Jammu.svg';
import Ladakh from '../../assets/Images/Ladakh.svg';
import Himachal from '../../assets/Images/Himachal.svg';
import Punjab from '../../assets/Images/Punjab.svg';
import Haryana from '../../assets/Images/Haryana.svg';



export default function StatesofIndia()
{
     const northIndia = [
          {
    title: "Jammu & Kashmir",
    subtitle: "Heaven on Earth",
    description: "Snow-clad peaks, shimmering lakes, and tulip gardens — J&K is where nature paints its finest masterpiece.",
    image: Jammu
  },
  {
    title: "Ladakh",
    subtitle: "Land of High Passes",
    description: "A mystical desert among the clouds, perfect for bikers, monks, and dreamers alike.",
    image: Ladakh
  },
  {
    title: "Himachal Pradesh",
    subtitle: "Mountains & Valleys",
    description: "From Shimla to Spiti, Himachal offers alpine beauty, ancient monasteries, and thrilling adventures.",
    image: Himachal 
  },
  {
    title: "Punjab",
    subtitle: "Heart of Vibrant India",
    description: "Land of golden fields, soulful music, and the iconic Golden Temple — Punjab radiates warmth and joy.",
    image: Punjab
  },
  {
    title: "Haryana",
    subtitle: "Where Heritage Meets Progress",
    description: "Known for Kurukshetra’s spiritual roots and modern Gurugram’s skyline — a blend of tradition and technology.",
    image: Haryana
  },
     ]
     return(
          <section className="states">
               <div className="statetop">
                    <h3>Explore the States of India</h3>
                    <p>A Journey Through Culture, Nature & Heritage</p>

               </div>

               <div className="discoverIndia">
                    <h3>Discover India – Land of Timeless Wonders</h3>
                    <p>Explore India’s 28 states and 8 union territories — each offering its own culture, cuisine, and charm. Find the perfect destination for your next journey through ages.</p>

               </div>

               <div className="northIndia">
                    <h3>North India</h3>
                      <div className="destination-cards-container">
      {northIndia.map((dest, index) => (
        <div className="destination-card" key={index}>
          <div className="card-image">
            <img src={dest.image} alt={dest.title} />
          </div>
          <div className="card-content">
            <h3>{dest.title}</h3>
            <h4>{dest.subtitle}</h4>
            <p>{dest.description}</p>
            <button>Read More...</button>
          </div>
        </div>
      ))}
    </div>

               </div>

          </section>
     )

};
