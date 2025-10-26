import React from "react";
import './statesofIndia.css';
import Jammu from '../../assets/Images/Jammu.svg';
import Ladakh from '../../assets/Images/Ladakh.svg';
import Himachal from '../../assets/Images/Himachal.svg';
import Punjab from '../../assets/Images/Punjab.svg';
import Haryana from '../../assets/Images/Haryana.svg';
import Uttarkhand from '../../assets/Images/Uttarkhand.svg';
import UttarPradesh from '../../assets/Images/UttarPradesh.svg';
import Delhi from '../../assets/Images/Delhi.svg';
import Kerala from '../../assets/Images/Kerala1.svg';
import Karnataka from '../../assets/Images/Karnataka1.svg';
import TamilNadu from '../../assets/Images/Tamilnadu.svg';
import AndhraPradesh from '../../assets/Images/AndhraPradesh.svg';
import Telangana from '../../assets/Images/Telangana.svg';
import Pudhucherry from '../../assets/Images/Pudhucherry.svg';
import Lakshadweep from '../../assets/Images/Lakshadweep.svg';
import Rajasthan from '../../assets/Images/Rajasthan2.svg';
import Gujarat from '../../assets/Images/Gujarat.svg';
import Goa from '../../assets/Images/Goa1.svg';
import Maharastra from '../../assets/Images/Maharastra.svg';
import Daman from '../../assets/Images/Daman.svg';
import WestBengal from '../../assets/Images/WestBengal.svg';
import Odisha from '../../assets/Images/Odisha.svg';
import Bihar from '../../assets/Images/Bihar.svg';
import Jarkhand from '../../assets/Images/Jarkhand.svg';
import MadhyaPradesh from '../../assets/Images/MadhyaPradesh.svg';
import Chattisgarh from '../../assets/Images/Chattisgarh.svg';


export default function StatesofIndia()
{
  
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
                    <div className="north-card">

                      <div className="ncard">
                        <img src={Jammu} alt="Jammu and Kashmir" />
                        <h3>Jammu & Kashmir</h3>
                        <h4>Heaven on Earth</h4>
                        <p>Snow-clad peaks, shimmering lakes, and tulip gardens — J&K is where nature paints its finest masterpiece.</p>
                        <button>Read More...</button>
                      </div>

                      <div className="ncard">
                        <img src={Ladakh} alt="Jammu and Kashmir" />
                        <h3>Ladakh</h3>
                        <h4>Land of High Passes</h4>
                        <p>A mystical desert among the clouds, perfect for bikers, monks, and dreamers alike.</p>
                        <button>Read More...</button>
                      </div>

                                <div className="ncard">
                        <img src={Himachal} alt="Jammu and Kashmir" />
                        <h3>Himachal Pradesh</h3>
                        <h4>Mountains & Valleys</h4>
                        <p>From Shimla to Spiti, Himachal offers alpine beauty, ancient monasteries, and thrilling adventures.</p>
                        <button>Read More...</button>
                      </div>

                           <div className="ncard">
                        <img src={Punjab} alt="Jammu and Kashmir" />
                        <h3>Punjab</h3>
                        <h4>Heart of Vibrant India</h4>
                        <p>Land of golden fields, soulful music, and the iconic Golden Temple — Punjab radiates warmth and joy.</p>
                        <button>Read More...</button>
                      </div>

                       <div className="ncard">
                        <img src={Haryana} alt="Jammu and Kashmir" />
                        <h3>Haryana</h3>
                        <h4>Heart of Vibrant India</h4>
                        <p>Land of golden fields, soulful music, and the iconic Golden Temple — Punjab radiates warmth and joy.</p>
                        <button>Read More...</button>
                      </div>

                       <div className="ncard">
                        <img src={Uttarkhand} alt="Jammu and Kashmir" />
                        <h3>Uttarakhand</h3>
                        <h4>Dev Bhoomi (Land of Gods)</h4>
                        <p>Pilgrimage routes, serene lakes, and snow peaks — a paradise for peace seekers and trekkers.</p>
                        <button>Read More...</button>
                      </div>

                       <div className="ncard">
                        <img src={UttarPradesh} alt="Jammu and Kashmir" />
                        <h3>Uttar Pradesh</h3>
                        <h4>Land of Heritage & Faith</h4>
                        <p>Home to the Taj Mahal, Varanasi, and Ayodhya — the cultural heart of India.</p>
                        <button>Read More...</button>
                      </div>

                       <div className="ncard">
                        <img src={Delhi} alt="Jammu and Kashmir" />
                        <h3>Delhi (UT)</h3>
                        <h4>The Capital of Stories</h4>
                        <p>A city of empires and energy — where Mughal grandeur meets modern India’s pulse.</p>
                        <button>Read More...</button>
                      </div>

                    </div>
               </div>

               <div className="south-India">
                    <h3>South India</h3>
                    <div className="southcard">

                         <div className="scard">
                        <img src={Kerala} alt="Kerala" />
                        <h3>Kerala</h3>
                        <h4>God’s Own Country</h4>
                        <p>Backwaters, lush greenery, and Ayurveda retreats — Kerala is nature’s own poetry.</p>
                        <button>Read More...</button>
                    </div>

                       <div className="scard">
                        <img src={TamilNadu} alt="Kerala" />
                        <h3>Tamil Nadu</h3>
                        <h4>Land of Temples & Tradition</h4>
                        <p>Majestic Dravidian temples, classical music, and rich cuisine make it a cultural treasure.</p>
                        <button>Read More...</button>
                    </div>

                     <div className="scard">
                        <img src={Karnataka} alt="Kerala" />
                        <h3>Karnataka</h3>
                        <h4>Sculpted by History</h4>
                        <p>From Hampi’s ruins to Coorg’s coffee hills — Karnataka is where heritage meets natural charm.</p>
                        <button>Read More...</button>
                    </div>

                    <div className="scard">
                        <img src={AndhraPradesh} alt="Kerala" />
                        <h3>Andhra Pradesh</h3>
                        <h4>The Essence of the East Coast</h4>
                        <p> A mix of coastal beauty, spiritual centers, and dynamic cities like Visakhapatnam.</p>
                        <button>Read More...</button>
                    </div>

                    <div className="scard">
                        <img src={Telangana} alt="Kerala" />
                        <h3>Telangana</h3>
                        <h4>The Modern Heritage State</h4>
                        <p> Charminar, pearls, and Hyderabad’s biryani — Telangana shines with a royal-modern blend.</p>
                        <button>Read More...</button>
                    </div>

                     <div className="scard">
                        <img src={Pudhucherry} alt="Kerala" />
                        <h3>Puducherry (UT)</h3>
                        <h4>The French Riviera of the East</h4>
                        <p>Colonial charm, serene beaches, and bohemian vibes make this coastal town a peaceful escape.</p>
                        <button>Read More...</button>
                    </div>

                     <div className="scard">
                        <img src={Lakshadweep} alt="Kerala" />
                        <h3>Lakshadweep (UT)</h3>
                        <h4>Coral Paradise of India</h4>
                        <p> Turquoise waters, coral reefs, and white sands — the perfect island getaway.</p>
                        <button>Read More...</button>
                    </div>


                    </div>

               </div>


               <div className="west-India">
                    <h3>West India</h3>
                    <div className="westcard">

                         <div className="wcard">
                        <img src={Rajasthan} alt="Kerala" />
                        <h3>Rajasthan</h3>
                        <h4>Land of Palaces & Deserts</h4>
                        <p>Majestic forts, royal tales, and golden sands — Rajasthan is India’s regal heart.</p>
                        <button>Read More...</button>
                        </div>

                        <div className="wcard">
                        <img src={Gujarat} alt="Kerala" />
                        <h3>Gujarat</h3>
                        <h4>Colors of Culture & Craft</h4>
                        <p>Home to Gir lions, stepwells, and festivals that dance in color and energy.</p>
                        <button>Read More...</button>
                        </div>

                        <div className="wcard">
                        <img src={Goa} alt="Kerala" />
                        <h3>Goa</h3>
                        <h4>Beaches & Vibrance</h4>
                        <p>Golden beaches, Portuguese charm, and lively festivals — Goa celebrates life itself.</p>
                        <button>Read More...</button>
                        </div>

                           <div className="wcard">
                        <img src={Maharastra} alt="Kerala" />
                        <h3>Maharashtra</h3>
                        <h4>Land of Maratha Glory</h4>
                        <p>Mumbai’s energy, Pune’s culture, and Ajanta’s art — Maharashtra is diverse and dynamic.</p>
                        <button>Read More...</button>
                        </div>

                        <div className="wcard">
                        <img src={Daman} alt="Kerala" />
                        <h3>Daman & Diu (UT)</h3>
                        <h4>Coastal Calm & Heritage Blend</h4>
                        <p> Serene beaches, colonial forts, and lush forests offer a peaceful coastal retreat.</p>
                        <button>Read More...</button>
                        </div>
                    </div>

               </div>


               <div className="east-India">
                    <h3>East India</h3>
                    <div className="east-card">

                         <div className="ecard">
                         <img src={WestBengal} alt="Kerala" />
                        <h3>West Bengal</h3>
                        <h4>Culture, Literature & Legacy</h4>
                        <p>From the Howrah Bridge to Darjeeling’s tea gardens — Bengal is art in motion.</p>
                        <button>Read More...</button>
                         </div>

                          <div className="ecard">
                         <img src={Odisha} alt="Kerala" />
                        <h3>Odisha</h3>
                        <h4>Temple Trails & Tribal Tales</h4>
                        <p>Magnificent temples, beaches, and indigenous heritage make Odisha truly captivating.</p>
                        <button>Read More...</button>
                         </div>

                          <div className="ecard">
                         <img src={Bihar} alt="Kerala" />
                        <h3>Bihar</h3>
                        <h4>Land of Ancient Civilizations</h4>
                        <p>Home of Buddhism’s origins and Nalanda’s wisdom — Bihar is steeped in history.</p>
                        <button>Read More...</button>
                         </div>

                           <div className="ecard">
                         <img src={Jarkhand} alt="Kerala" />
                        <h3>Jharkhand</h3>
                        <h4>Nature’s Hidden Jewel</h4>
                        <p>Waterfalls, forests, and tribal culture make Jharkhand an unexplored gem.</p>
                        <button>Read More...</button>
                         </div>
                    </div>

               </div>

               <div className="central-India">
                    <h3>Central India</h3>
                    <div className="central-card">
                         <div className="ccard">
                               <div className="ecard">
                                   <img src={MadhyaPradesh} alt="Kerala" />
                                  <h3>Madhya Pradesh</h3>
                                  <h4>The Heart of Incredible India</h4>
                                   <p>Temples, wildlife, and heritage cities like Khajuraho — MP is where India comes alive.</p>
                                 <button>Read More...</button>
                         </div>

                          <div className="ecard">
                                   <img src={Chattisgarh} alt="Kerala" />
                                  <h3>Chhattisgarh</h3>
                                  <h4>Land of Waterfalls & Tribes</h4>
                                   <p>Untamed forests, caves, and ethnic festivals showcase India’s raw natural beauty.</p>
                                 <button>Read More...</button>
                         </div>


                         </div>

                    </div>

               </div>

          </section>
     )

};
