import { useState } from "react";
import pic2 from "../assets/pic2.jpg";
import pic2p2 from "../assets/pic2-2.jpg";
import pic2p3 from "../assets/pic2-3.jpg";
import pic2p4 from "../assets/pic2-4.jpg";

// import MyMap from "../components/reactMap";
// import React from 'react';

import './Listing.css';

const Listing = () => {



    return (

        <div className="container">

            <div className="cont1">

                <div className="picture">
                    <img src={pic2} alt="lite" className="butterfly" />
                </div>

                <div className="format1">
                    <div className="square">
                        <img src={pic2p2} alt="lite" className="t" />
                    </div>

                    <div className="square">
                        <img src={pic2p3} alt="lite" className="t" />
                    </div>

                </div>

                <div className="format2">
                    <img src={pic2p4} alt="lite" className="idk" />

                    <button className="save-butt">Save Home</button>
                </div>

                
                

            </div>


            <div className="cont2">

                <div className="stats">
                    <h2 className="cost">$900/Month</h2>
                    <h2 className="address">15000 Arroyo Dr, Irvine, CA 92697</h2>
                    <h2 className="room">Plaza Verde, 2 Bed 2 Bath - Floor Plan A</h2>
                    {/* <h2 className="contacts">Phone#: 714-XXX-XXXX</h2> */}
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






        </div>


    );




}
export default Listing;
