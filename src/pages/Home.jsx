import { useState } from "react";
import pic1 from "./pictures/pic1.jpg";
import pic2 from "./pictures/pic2.jpg";
import pic3 from "./pictures/pic3.jpg";
import pic4 from "./pictures/pic4.jpg";
import infop1 from "./pictures/infop1.png"
import infop2 from "./pictures/infop2.jpg"
import SearchBar from "../components/SearchBar"
import { useEffect, useNavigate } from "react";
import LOGO1 from "./pictures/LOGO1.png"


import './Home.css';

const Home = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem('user') === null) {
    //   navigate('/login');
    // }
  }, []);


  const data = [
    'UC Irvine',
    'UCLA',
    'USC',
  ];
  return (
    <div>

      <div className="top-halfp1">

        <div className='format-logo'>
            <img src={LOGO1} alt="lite" className="logo" />
        </div>

        <div className="main-search">
          <SearchBar data = {data}></SearchBar>
        </div>

      </div>
      

      <div className="top-halfp2">
        <h2 className="subheader">Our Listings</h2>

        <div className="image-container">
          
          
          <div className='format-pics'>
              <img src={pic1} alt="lite" className="butterfly" />
            
          </div>


          <div className='format-pics'>
            <a href="/listing/1">
              <img src={pic2} alt="lite" className="butterfly" />
            </a>
          </div>

          <div className='format-pics'>
            <img src={pic3} alt="lite" className="butterfly" />
          </div>

          <div className='format-pics'>
            <img src={pic4} alt="lite" className="butterfly" />
          </div>
        </div>

      </div>

      <div className="bottom-half">

        <div className="informational-1">

          <div className="info-pic">
            <img src={infop1} alt="lite" className="white-pic" />
          </div>

          <div className="text">
            <h2 className="info">What Makes Us Different:</h2>
            <h2 className="info">Find your housing all in one place</h2>
            <h2 className="info">with CampusNest no more posting on social media or reaching out to your friends</h2>
          </div>

        </div>

        <div className="informational-2">
          <div className="text">
            <h2 className="info">What Makes Us Different:</h2>
            <h2 className="info">Find your housing all in one place</h2>
            <h2 className="info">with HouseLink no more posting on social media or reaching out to your friends</h2>
          </div>

          <div className="info-pic">
            <img src={infop2} alt="lite" className="white-pic" />
          </div>

        </div>

      </div>



    </div>

 
    

    );
};

export default Home;
