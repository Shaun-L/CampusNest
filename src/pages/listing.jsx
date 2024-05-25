import { useState } from "react";
import pic2 from "./pictures/pic2.jpg";


import './Listing.css';

const Listing = () => {



return (

    <div className="container">



        <div className="cont1">

            <div className="picture">
                <img src={pic2} alt="lite" className="butterfly" />
            </div>

            <div className="stats">
                <h2 className="cost">$900/Month</h2>
                <h2 className="address">15000 Arroyo Dr, Irvine, CA 92697</h2>
                <h2 className="room">Plaza Verde, 2 Bed 2 Bath - Floor Plan A</h2>
                {/* <h2 className="contacts">Phone#: 714-XXX-XXXX</h2> */}
            </div>

        </div>




        <div className="more-details">
            

            <h2 className="deats-sub">
                <span className="apartment-name">Female</span> Gender Preference
            </h2>

            <h2 className="deats-sub">
                <span className="apartment-name">June 2024 - September 2024</span>  Duration
            </h2>

            <h2 className="deats-sub">
                <span className="apartment-name">4 mi</span> Distance to School
            </h2>

            <h2 className="deats-sub">
                <span className="apartment-name">Is</span> Walking Distance, Furnished
            </h2>

            <h2 className="small">Utilities include internet, gas, water, trash, and parking is available for purchase</h2>
        
            <h2 className="small">Contact elise@gmail.com, 714-XXX-XXXX for more details</h2>

        

        </div>
    

    </div>


);




}
export default Listing;
