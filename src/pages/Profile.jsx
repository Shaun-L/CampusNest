import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ListingCard from "../components/ListingCard";

import { db } from "../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

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
    <div className="grid grid-cols-3 gap-8 m-8">
      <div className="col-span-1 flex flex-col gap-8">
        <div className="rounded-xl w-full h-auto bg-white p-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
              className="w-24 h-24 rounded-fullborder-2"
            />
            <h1 className="text-xl font-semibold">Name</h1>
            <p>Email</p>
          </div>
        </div>
        <div className="rounded-xl w-full h-auto bg-violet-100 py-8 px-16">
          <h2 className="text-2xl font-semibold text-center">
            User Preferences
          </h2>
          <div>
            <div className="my-4">
              <p className="text-sm font-bold">Maximum Distance from School</p>
              <p>{distance} miles</p>
            </div>
            <div className="my-4">
              <p className="text-sm font-bold">Rent Price</p>
              <p>
                ${rentMin} - ${rentMax}
              </p>
            </div>
            <div className="my-4">
              <p className="text-sm font-bold">Roommate</p>
              <p>{roommate}</p>
            </div>
            <div className="my-4">
              <p className="text-sm font-bold">Other Tags</p>
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
      </div>
    </div>
  );
};

export default Profile;
