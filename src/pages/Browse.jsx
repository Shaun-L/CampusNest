import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const Browse = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [savedSet, setSavedSet] = useState(new Set());

  const [roomCount, setRoomCount] = useState(null);
  const [distance, setDistance] = useState(null);
  const [rentMax, setRentMax] = useState(null);
  const [genderPreference, setGenderPreference] = useState();
  const [selectedSchool, setSelectedSchool] = useState("All");

  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
  };

  useEffect(() => {
    getSaved();
    getListings();
  }, []);

  // useEffect(() => {
  //   getListings();
  // }, [savedSet]);

  const getSaved = async () => {
    const loggedInUser = localStorage.getItem("userid");
    if (loggedInUser) {
      const docRef = doc(db, "users", loggedInUser);
      const querySnapshot = await getDoc(docRef);

      if (querySnapshot.exists()) {
        const userData = querySnapshot.data();

        const savedSet = new Set(userData.saved);
        setSavedSet(savedSet);
        console.log(savedSet)
      }
    }
  }

  const getListings = async () => {
    const listingsRef = collection(db, "listings");
    const querySnapshot = await getDocs(listingsRef);

    if (!querySnapshot.empty) {
      let docs = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.savedByUser = savedSet && savedSet.has(doc.id);
        data.id = doc.id;
        docs.push(data);
      })
      setListings(docs);
      setFilteredListings(docs);
    }
  };

    useEffect(() => {
      filterListings();
    }, [distance, rentMax, roomCount, genderPreference, selectedSchool]);
  
    const filterListings = () => {
      let filteredList = [...listings];
  
      if (distance) {
        filteredList = filteredList.filter((listing) => listing.distance <= distance);
      }
  
      if (rentMax) {
        filteredList = filteredList.filter((listing) => listing.rent <= rentMax);
      }
  
      if (roomCount) {
        filteredList = filteredList.filter((listing) => listing.bedrooms === roomCount);
      }
  
      if (genderPreference) {
        filteredList = filteredList.filter((listing) => listing.gender === genderPreference);
      }
  
      if (selectedSchool) {
        filteredList = filteredList.filter((listing) => listing.university === selectedSchool);
      }
  
      setFilteredListings(filteredList);
    };


  return (
    <div className="mx-12 ">


      {/* text that says browse listing and search bar */}
      <div className="w-full flex gap-10 items-center">

        <h1 className="text-3xl font-medium my-4">Browse Listings</h1>

        {/* search bar */}
        <div className="my-4 flex-grow grid grid-cols-4">
          <div className="relative col-span-3 w-full h-12 mr-4 ">
            <input
              type="text"
              className="rounded-full border-2 h-full w-full pl-12 border-black"
            />
            <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>


        </div>
      </div>

      {/* filter bar on top */}
      <div className="flex justify-start">


          {/* by distance */}
          <div>
              <p className="text-medium font-medium">Distance</p>
              <div>
                  <input
                    type="number"
                    name="distance"
                    id="distance"
                    min="0"
                    autoComplete="distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
                  />
                </div>
          </div>

        {/* by price */}
        <div>
          <p className="text-medium font-medium">Price</p>
          <div>
            <input
              type="number"
              name="monthly-rent"
              id="monthly-rent"
              min="0"
              autoComplete="monthly-rent"
              value={rentMax}
              onChange={(e) => setRentMax(e.target.value)}
              required
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
            />
          </div>

        </div>

          {/* by room # */}
          <div>
            <p className="text-medium font-medium"># of Rooms</p>
            <div>
                <input
                  type="number"
                  name="number-of-rooms"
                  id="number-of-rooms"
                  min="0"
                  autoComplete="number-of-rooms"
                  value={roomCount}
                  onChange={(e) => setRoomCount(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
                />
              </div>
          </div>
          

        <div>
          {/* Gender Preference */}
          <p className="text-medium font-medium">Gender</p>
          <div>
            <select className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6">
              <option>Female</option>
              <option>Male</option>
              <option>Transgender</option>
              <option>Nonbinary</option>
              <option>Other</option>
            </select>
          </div>
        </div>


          {/* by school */}
          <div>
            <div className="relative rounded-full ml-4 h-12 bg-gray-400">
                <select className="rounded-full border-2 h-full w-full pl-12 border-black"
                onChange={handleSchoolChange}
                value={selectedSchool}>
                  <option value='' >All</option>
                  <option value="UC Irvine">UC Irvine</option>
                  <option value="UC Los Angeles">UC Los Angeles</option>
                  <option value="UC Riverside">UC Riverside</option>
                  <option value="CSU Long Beach">CSU Long Beach</option>
                </select>
                <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                  </svg>
                </div>
              </div>
          </div>
      </div>

      </div>

      {/* school select */}

      <div className="flex gap-8">
        {/* filter sidebar */}


        </div>
        {/* grid of apartments */}
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-8">
          {filteredListings && filteredListings.map((listing) => {
            return <ListingCard listing={listing} />;
          })}
        </div>
      </div>
  );
};

export default Browse;
