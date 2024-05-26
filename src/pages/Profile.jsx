import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ListingCard from "../components/ListingCard";

import { db } from "../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import './Profile.css';

const Profile = () => {
  const [listings, setListings] = useState([]);

  const [distance, setDistance] = useState(null);
  const [rentMin, setRentMin] = useState(null);
  const [rentMax, setRentMax] = useState(null);

  const [roommate, setRoommate] = useState(null);
  const [pets, setPets] = useState(false);
  const [femaleHousehold, setFemaleHousehold] = useState(false);
  const [lgbtqFriendly, setLgbtqFriendly] = useState(false);

  const navigate = useNavigate();

  useEffect(async () => {
    const loggedInUser = localStorage.getItem("userid");
    console.log(loggedInUser);
    if (loggedInUser) {
      const docRef = doc(db, "users", loggedInUser);
      const querySnapshot = await getDoc(docRef);

      if (querySnapshot.exists()) {
        const userData = querySnapshot.data();
        console.log(userData);
        setDistance(userData.distance);
        setRentMin(userData.minPrice);
        setRentMax(userData.maxPrice);
        setRoommate(userData.roomatePref);
        setLgbtqFriendly(userData.lgbtqFriendly);
        setFemaleHousehold(userData.femaleHousehold);
        setPets(userData.pets);

        const savedSet = new Set(userData.saved);
        getListings(savedSet);
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);

  const getListings = async (savedSet) => {
    const listingsRef = collection(db, "listings");
    const querySnapshot = await getDocs(listingsRef);

    if (!querySnapshot.empty) {
      let docs = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        if (savedSet.has(doc.id)) {
          data.id = doc.id;
          data.savedByUser = savedSet && savedSet.has(doc.id);
          docs.push(data);
        }
      });
      setListings(docs);
    }
  };

  return (
    <div className="all">

      <div className="first-half">

        <div className="p1">
          <img className="image" src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" />
          <div className="personal-info">
            <h1 className="text">Name: XXXXX</h1>
            <h1 className="text">Email: XXXXX </h1>

          </div>
        </div>

      </div>

      <div className="second-half">

        <div className="p2">
          <h1 className="prefer-header">User Preferences</h1>

          <div>
            <p className="prefer-text">Maximum Distance from School</p>
            <p className="prefer-t">{distance} miles</p>
          </div>

          <div>
              <p className="prefer-text">Rent Price</p>
              <p className="prefer-t">
                ${rentMin} - ${rentMax}
              </p>
          </div>

          <div>
              <p className="prefer-text">Roommate</p>
              <p className="prefer-t">{roommate}</p>
          </div>

          <div>
              <p className="prefer-text">Other Tags</p>
              {pets && <p className="prefer-t">Owns Pets</p>}
              {femaleHousehold && <p className="prefer-t">Prefer All-Female Household</p>}
              {lgbtqFriendly && <p className="prefer-t">Prefer LGBTQ-friendly</p>}
          </div>

        </div>

        <div className="saved">
          <h1 className="text-homes">Saved Homes</h1>

          <div class="grid grid-cols-1 xl:grid-cols-2 grid-flow-row justify-items-center my-8 mx-12 gap-4">
            {listings.map((listing) => {
              return <ListingCard listing={listing} />;
            })}
          </div>

        </div>
        
      </div>



      









      {/* <div>
        <div>
          <div>
            <img
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
            />
            <h1>Name</h1>
            <p>Email</p>
          </div>
        </div>
        <div>
          <h2>
            User Preferences
          </h2>
          <div>
            <div>
              <p>Maximum Distance from School</p>
              <p>{distance} miles</p>
            </div>
            <div>
              <p>Rent Price</p>
              <p>
                ${rentMin} - ${rentMax}
              </p>
            </div>
            <div>
              <p>Roommate</p>
              <p>{roommate}</p>
            </div>
            <div>
              <p>Other Tags</p>
              {pets && <p>Owns Pets</p>}
              {femaleHousehold && <p>Prefer All-Female Household</p>}
              {lgbtqFriendly && <p>Prefer LGBTQ-friendly</p>}
            </div>
          </div>
        </div>
      </div>






      <div className="col-span-2">
        <div className="rounded-xl w-full h-auto bg-white p-4 ">
          <h2 className="text-2xl font-semibold text-center my-4">
            Saved Listings
          </h2>
          <div class="grid grid-cols-1 xl:grid-cols-2 grid-flow-row justify-items-center my-8 mx-12 gap-4">
            {listings.map((listing) => {
              return <ListingCard listing={listing} />;
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
