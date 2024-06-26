import { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import './Home.css';

const Browse = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [savedSet, setSavedSet] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("")

  const [roomCount, setRoomCount] = useState("");
  const [distance, setDistance] = useState("");
  const [rentMax, setRentMax] = useState("");
  const [genderPreference, setGenderPreference] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");

  const handleSchoolChange = (e) => {
    setSelectedSchool(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGenderPreference(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getSaved();
  }, []);

  useEffect(() => {
    getListings();
  }, [savedSet]);

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
  }, [distance, rentMax, roomCount, genderPreference, selectedSchool, searchQuery]);

  const filterListings = () => {
    let filteredList = [...listings];

    if (distance) {
      filteredList = filteredList.filter((listing) => listing.distance <= distance);
    }

    if (rentMax) {
      filteredList = filteredList.filter((listing) => (listing.rent | 0) <= rentMax);
    }

    if (roomCount) {
      filteredList = filteredList.filter((listing) => listing.bedrooms == roomCount);
    }

    if (genderPreference) {
      filteredList = filteredList.filter((listing) => listing.seller.gender == genderPreference);
    }

    if (selectedSchool) {
      filteredList = filteredList.filter((listing) => listing.university == selectedSchool);
    }
    if (searchQuery) {
      filteredList = filteredList.filter((listing) =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredListings(filteredList);
  };


  return (
    <div className="">


      {/* text that says browse listing and search bar */}
      <div className="w-full grid grid-cols-4 justify-between items-center px-20">

        <h1 className="text-3xl col-span-1 font-medium my-4">Browse Listings</h1>

        <span className="col-span-2"></span>
        {/* search bar */}
        <div className="my-4 w-auto col-span-1">
          <div className="relative col-span-3 w-full h-12 text-black">
            <input
              type="text"
              className="rounded-full border-2 h-full w-full pl-12 border-black"
              value={searchQuery} // Bind searchQuery state to input value
              onChange={handleSearchChange}
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
      <div className="flex justify-stretch items-start mx-20 my-4 gap-8">


        {/* by distance */}
        <div className="w-full">
          <p className="text-medium font-medium">Max Distance</p>
          <div className="w-full">
            <input
              type="number"
              name="distance"
              id="distance"
              min="0"
              autoComplete="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              required
              className="block w-full rounded-full border-0 p-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
            />
          </div>
        </div>

        {/* by price */}
        <div className="w-full">
          <p className="text-medium font-medium">Max Price</p>
          <div>
            <input
              type="number"
              name="monthly-rent"
              id="monthly-rent"
              min="0"
              autoComplete="monthly-rent"
              value={rentMax}
              onChange={(e) => setRentMax(e.target.value)}
              className="block w-full rounded-full border-0 p-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
            />
          </div>

        </div>

        {/* by room # */}
        <div className="w-full">
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
              className="block w-full rounded-full border-0 p-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
            />
          </div>
        </div>


        <div className="w-full">
          {/* Gender Preference */}
          <p className="text-medium font-medium">Gender</p>
          <div>
            <select className="block w-full rounded-full border-0 p-1.5 px-4 mr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
            onChange={handleGenderChange}
            value={genderPreference}>
              <option value=''>Any</option>
              <option value='Female'>Female</option>
              <option value='Male'>Male</option>
              <option value='Transgender'>Transgender</option>
              <option value='Nonbinary'>Nonbinary</option>
              <option value='Other'>Other</option>
            </select>
          </div>
        </div>


        {/* by school */}
        <div className="w-full">
        <p className="text-medium font-medium">University</p>
          <div className="">
          <select className="block w-full rounded-full border-0 p-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 mb-6"
              onChange={handleSchoolChange}
              value={selectedSchool}>
              <option value='' >All</option>
              <option value="UC Irvine">UC Irvine</option>
              <option value="UC Los Angeles">UC Los Angeles</option>
              <option value="UC Riverside">UC Riverside</option>
              <option value="CSU Long Beach">CSU Long Beach</option>
              <option value="USC">USC</option>
            </select>
            {/* <div class="absolute inset-y-0 h-6 start-0 flex items-center ps-5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>


      {/* school select */ }

  <div className="flex gap-8">
    {/* filter sidebar */}


  </div>
  {/* grid of apartments */ }
  <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-x-0 gap-y-16  mx-12 justify-items-center">
    {filteredListings && filteredListings.map((listing, index) => {
      const animationDelay = `delay-${index+1}`
      return <ListingCard key={listing.id} listing={listing} delay={animationDelay}/>;
    })}
  </div>
      
</div >
  );
};

export default Browse;
