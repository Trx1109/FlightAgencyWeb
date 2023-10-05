import paris from "../../assets/paris.jpg";
import user from "../../assets/user.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import newyork from "../../assets/newyork.jpg";
import dubai from "../../assets/dubai.jpg";
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: user,
    travelerName: "IsraTech",
    socialLink: "@isratech8",
  },
  {
    id: 2,
    destinationImage: newyork,
    travelerImage: user2,
    travelerName: "John",
    socialLink: "@jhosa22",
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: user3,
    travelerName: "Mikka",
    socialLink: "@mikka22",
  },
  {
    id: 4,
    destinationImage: dubai,
    travelerImage: user3,
    travelerName: "Mikka",
    socialLink: "@mikka22",
  },
];

const Travelers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2  data-aos='fade-down'  data-aos-duration='2500'>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              socialLink,
              travelerImage,
              travelerName,
            }) => {
              return (
                <div  data-aos='fade-up'  data-aos-duration='2500' key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
