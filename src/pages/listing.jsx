import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
import pic2 from "../assets/pic2.jpg";
import pic2p2 from "../assets/pic2-2.jpg";
import pic2p3 from "../assets/pic2-3.jpg";
import pic2p4 from "../assets/pic2-4.jpg";


import { db } from "../firebase";
import {
  updateDoc,
  doc,
  getDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
// import MyMap from "../components/reactMap";
// import React from 'react';

import "./Listing.css";



const Listing = () => {
  const [listing, setListing] = useState(null);
  const [saved, setSaved] = useState(false);
  const { id } = useParams();

  const copyClipboard = () => {
    // Get the text field
    const copyText = (listing.seller || "").email || "b";

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied seller's email: " + copyText.value);
  };

  const save = async () => {
    const userid = localStorage.getItem("userid");
    if (userid) {
      await updateDoc(doc(db, "users", userid), {
        saved: arrayUnion(id),
      });
      setSaved(true);
    }
  };

  const unsave = async () => {
    const userid = localStorage.getItem("userid");
    if (userid) {
      await updateDoc(doc(db, "users", userid), {
        saved: arrayRemove(id),
      });
      setSaved(false);
    }
  };

  function formatDateToMonthYear(dateString) {
    const date = new Date(dateString);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }


  useEffect(() => {
    // get listing with id
    getListing();
  }, []);

  const getListing = async () => {
    const querySnapshot = await getDoc(doc(db, "listings", id));
    if (querySnapshot.exists()) {
      setListing(querySnapshot.data());
    }
  };

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
  
  {/* return (
    <div>
      {listing && (
        <div className="container w-screen">
          <div className="cont1">
            <div className="h-1/2 flex justify-center">
              <img
                src={listing.imageList[0]}
                alt="lite"
                className="w-auto max-h-full rounded-xl"
              />
            </div>

            <div className="stats w-3/4 flex mx-auto my-4 justify-center">
              <div className="w-full mx-20">
                <div className="flex justify-between items-center">
                  <h2 className="cost text-3xl font-semibold my-4">
                    {listing.title}
                  </h2>
                  <h2 className="text-2xl">
                    <span className="font-semibold text-3xl my-2">
                      ${listing.rent}
                    </span>
                    /month
                  </h2>
                </div>
                <div className="w-full flex justify-between items-center gap-5 my-2">
                  <h2 className="text-lg">
                    <span className="font-semibold text-xl my-2">
                      {listing.distance || 0}
                    </span>{" "}
                    miles from {listing.university}
                  </h2>
                  <h2 className="text-lg">
                    {formatDateToMonthYear(listing.startDate)}{" "}
                    <span className="text-lg">to</span>{" "}
                    {formatDateToMonthYear(listing.endDate)}
                  </h2>
                </div>

                <p className="text-xl my-8">{listing.description}</p>

                <div className="my-4">
                  <h2 className="address text-lg">{listing.address}</h2>
                  <h2 className="address text-lg">
                    {listing.city}, {listing.state} {listing.zip}
                  </h2>
                </div>

                <div className="flex justify-between my-8">
                  <h2 className="cost text-2xl font-semibold">Tags</h2>

                  <div className="text-end">
                    <p>{listing.petTag && "Pet Friendly"}</p>
                    <p>{listing.femaleTag && "All Female Household"}</p>
                    <p>{listing.lgbtqFriendlyTag && "LGBTQ Friendly"}</p>
                    <p>{listing.safeTag && "Safe Area at Night"}</p>
                    <p>{listing.furnishedTag && "Already furnished"}</p>
                    <p>{listing.poolTag && "Pool ammenities"}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="w-3/4 mx-auto flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mx-20 ">About the Seller</h2>

            <div className="grid grid-cols-3 mx-20 my-4 justify-center">
              <div className="col-span-1">
                <p>Name</p>
                <p>Gender</p>
                <p>Roommate Preference</p>
                <p>Year</p>
                <p>Major</p>
              </div>
              <div className="col-span-2 text-end">
                <p>{listing.seller?.name || ""}</p>
                <p>{listing.seller?.gender || ""}</p>
                <p>{listing.seller?.year || ""}</p>
                <p>{listing.seller?.major || ""}</p>

                <p>{listing.roomatePref || "Not Specified"}</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto my-6 flex flex-col justify-center">
            <div className="flex justify-around mx-20">
              <button
                className="bg-black text-white text-xl rounded-full px-6 py-2"
                onClick={copyClipboard}
              >
                Contact Seller
              </button>

              {saved ? (
                <button
                  className="w-40 relative bg-black text-white text-xl rounded-full flex justify-center gap-2 items-center"
                  onClick={unsave}
                >
                  <p>Unsave</p>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 21.875V5.20833C5 4.63542 5.19583 4.14497 5.5875 3.73698C5.97917 3.32899 6.45 3.125 7 3.125H17C17.55 3.125 18.0208 3.32899 18.4125 3.73698C18.8042 4.14497 19 4.63542 19 5.20833V21.875L12 18.75L5 21.875Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="w-40 relative bg-black text-white text-xl rounded-full flex justify-center gap-4 items-center"
                  onClick={save}
                >
                  <p>Save</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 -960 960 960"
                    width="28px"
                    fill="#FFFFFF"
                  >
                    <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center rounded-full my-8">
        <Map />
      </div>

    </div>
  ); */}

  

};
export default Listing;
