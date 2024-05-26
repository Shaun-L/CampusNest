import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import img from '../assets/car.png';
import './RoomateMatch.css';

const RoommateMatch = () => {
  const [roommates, setRoommates] = useState([]);
  const [filteredRoommates, setFilteredRoommates] = useState([]);

  const [distance, setDistance] = useState("");
  const [gender, setGender] = useState("");
  const [lgbtqFriendly, setLgbtqFriendly] = useState("");
  const [femaleHousehold, setFemaleHousehold] = useState("");
  const [furnished, setFurnished] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [major, setMajor] = useState("");
  const [pets, setPets] = useState("");
  const [pool, setPool] = useState("");
  const [university, setUniversity] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    getRoommates();
  }, []);

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  }

  const getRoommates = async () => {
    const roommatesRef = collection(db, "users");
    const querySnapshot = await getDocs(roommatesRef);

    if (!querySnapshot.empty) {
      let docs = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        docs.push(data);
      });
      setRoommates(docs);
      setFilteredRoommates(docs);
    }
  };

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  useEffect(() => {
    filterRoommates();
  }, [distance, gender, lgbtqFriendly, femaleHousehold, furnished, maxPrice, minPrice, major, pets, pool, university, year]);

  const filterRoommates = () => {
    let filteredList = [...roommates];

    if (distance) {
      filteredList = filteredList.filter((roommate) => parseInt(roommate.distance) <= parseInt(distance));
    }

    if (gender) {
      filteredList = filteredList.filter((roommate) => roommate.gender === gender);
    }

    if (lgbtqFriendly) {
      filteredList = filteredList.filter((roommate) => roommate.lgbtqFriendly === (lgbtqFriendly === "true"));
    }

    if (femaleHousehold) {
      filteredList = filteredList.filter((roommate) => roommate.femaleHousehold === (femaleHousehold === "true"));
    }

    if (furnished) {
      filteredList = filteredList.filter((roommate) => roommate.furnished === (furnished === "true"));
    }

    if (maxPrice) {
      filteredList = filteredList.filter((roommate) => parseInt(roommate.maxPrice) <= parseInt(maxPrice));
    }

    if (minPrice) {
      filteredList = filteredList.filter((roommate) => parseInt(roommate.minPrice) >= parseInt(minPrice));
    }

    if (major) {
      filteredList = filteredList.filter((roommate) => 
      roommate.major.toLowerCase().includes(major.toLowerCase()));
    }

    if (pets) {
      filteredList = filteredList.filter((roommate) => roommate.pets === (pets === "true"));
    }

    if (pool) {
      filteredList = filteredList.filter((roommate) => roommate.pool === (pool === "true"));
    }


    if (university) {
      filteredList = filteredList.filter((roommate) => roommate.university === university);
    }

    if (year) {
      filteredList = filteredList.filter((roommate) => roommate.year === year);
    }

    setFilteredRoommates(filteredList);
  };

  return (
    <div className="bg-image">
    {/* <div className="relative w-screen h-screen z-0">
    <img src={img} />

    </div> */}
    <div className="mx-12 z-10 relative ">
      <h1 className="text-3xl font-medium py-4 my-4 ">Find Your Roommate</h1>

      <div className="flex justify-start gap-8 flex-wrap">
        {/* Filter by distance */}
        <div>
          <p className="text-medium font-medium">Distance</p>
          <input
            type="text"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          />
        </div>

        {/* Filter by gender */}
        <div>
          <p className="text-medium font-medium">Gender</p>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          >
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Filter by LGBTQ+ Friendly */}
        <div>
          <p className="text-medium font-medium">LGBTQ+ Friendly</p>
          <select
            value={lgbtqFriendly}
            onChange={(e) => setLgbtqFriendly(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          >
            <option value="">Any</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Filter by female household */}
        <div>
          <p className="text-medium font-medium">Female Household</p>
          <select
            value={femaleHousehold}
            onChange={(e) => setFemaleHousehold(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          >
            <option value="">Any</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Filter by furnished */}
        <div>
          <p className="text-medium font-medium">Furnished</p>
          <select
            value={furnished}
            onChange={(e) => setFurnished(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          >
            <option value="">Any</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Filter by max price */}
        <div>
          <p className="text-medium font-medium">Max Price</p>
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          />
        </div>

        {/* Filter by min price */}
        <div>
          <p className="text-medium font-medium">Min Price</p>
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          />
        </div>

        {/* Filter by major */}
        <div>
          <p className="text-medium font-medium">Major</p>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          />
        </div>

        {/* Filter by pets */}
        <div>
          <p className="text-medium font-medium">Pets</p>
          <select
            value={pets}
            onChange={(e) => setPets(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          >
            <option value="">Any</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Filter by pool */}
        <div>
          <p className="text-medium font-medium">Pool</p>
          <select
            value={pool}
            onChange={(e) => setPool(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          >
            <option value="">Any</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Filter by university */}
        <div>
          <p className="text-medium font-medium">University</p>
          <select
                id="university"
                name="university"
                autoComplete="university"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={university}
                onChange={handleUniversityChange}
                required
              >
                <option value="UC Irvine">UC Irvine</option>
                <option value="UC Los Angeles">UC Los Angeles</option>
                <option value="UC Riverside">UC Riverside</option>
                <option value="CSU Long Beach">CSU Long Beach</option>
                <option value="USC">USC</option>
  
              </select>
        </div>

        {/* Filter by year */}
        <div>
          <p className="text-medium font-medium">Year</p>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="block w-full rounded-md p-1.5 mb-6 text-black"
          />
        </div>
      </div>

      {/* Display filtered roommates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredRoommates.map((roommate) => (
          <div key={roommate.id} className="border p-4 bg-gray-200 text-black rounded-lg">
            <h2 className="text-xl font-bold">{roommate.name}</h2>
            <p>Email: <a href={`mailto:${roommate.email}`} className="underline" onClick={() => handleEmailClick(roommate.email)}>{roommate.email}</a></p>
            <p>Gender: {roommate.gender}</p>
            <p>Major: {roommate.major}</p>
            <p>University: {roommate.university}</p>
            <p>Year: {roommate.year}</p>
            <p>Max Price: ${roommate.maxPrice}</p>
            <p>Min Price: ${roommate.minPrice}</p>
            <p>Distance: {roommate.distance} miles</p>
            <p>Female Household: {roommate.femaleHousehold ? "Yes" : "No"}</p>
            <p>Furnished: {roommate.furnished ? "Yes" : "No"}</p>
            <p>LGBTQ+ Friendly: {roommate.lgbtqFriendly ? "Yes" : "No"}</p>
            <p>Pets: {roommate.pets ? "Yes" : "No"}</p>
            <p>Pool: {roommate.pool ? "Yes" : "No"}</p>
            <p>Roommate Preference: {roommate.roommatePref}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RoommateMatch;
