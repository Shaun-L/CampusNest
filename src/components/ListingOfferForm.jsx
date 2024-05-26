import React, { useState, useEffect } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, listAll, list, deleteObject} from 'firebase/storage';
import { v4 } from 'uuid';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { useNavigate } from 'react-router-dom';

const ListingOfferForm = () => {
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[address, setAddress] = useState('');
  const[city, setCity] = useState('');
  const[state, setState] = useState('AL');
  const[zip, setZip] = useState('');
  const[university, setUniversity] = useState('');
  const[type, setType] = useState('Apartment');
  const [distance, setDistance] = useState('');
  const[rent, setRent] = useState('');
  const[startDate, setStartDate] = useState('');
  const[endDate, setEndDate] = useState('');
  const[bedrooms, setBedrooms] = useState('');
  const[bathrooms, setBathrooms] = useState('');
  const[roomType, setRoomType] = useState('Single');
  const[petTag, setPetTag] = useState(false);
  const[femaleTag, setFemaleTag] = useState(false);
  const[lgbtqFriendlyTag, setLgbtqFriendlyTag] = useState(false);
  const [safeTag, setSafeTag] = useState(false);
  const[furnishedTag, setFurnishedTag] = useState(false);
  const[poolTag, setPoolTag] = useState(false);
  const navigate = useNavigate();


  const[imageList, setImageList] = useState([]);
  const[image, setImage] = useState(null);

  const imagesListRef = ref(storage, "images/");

  const handleUpload = () => {
    console.log("handle upload")
    if (image == null) return;
    const imgRef = ref(storage, `images/${v4()}`);
    uploadBytes(imgRef, image).then(value => {
      getDownloadURL(value.ref).then(url => {
        setImageList(data => [...data, url])
      })
    });
  }

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);


  


  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const userid = localStorage.getItem("userid");
    let seller = null;
    if (userid) {
      // get submitter's info
      const querySnapshot = await getDoc(doc(db, "users", userid));
      if (querySnapshot.exists()) {
        const userData = querySnapshot.data();
        
        seller = {
          name: userData.name,
          email: userData.email
        }
      }
    }
    console.log(seller)

    try {
      console.log(imageList)

      const docRef = await addDoc(collection(db, "listings"), {
        title,
        description,
        address,
        city,
        state,
        zip,
        university,
        type,
        rent,
        startDate,
        endDate,
        bedrooms,
        bathrooms,
        distance,
        roomType,
        petTag,
        femaleTag,
        lgbtqFriendlyTag,
        furnishedTag,
        poolTag,
        seller: {
          name: seller.name,
          email: seller.email || '',
          gender: seller.gender || '',
          year: seller.year || '',
          major: seller.major || ''
        },
        imageList
      });
      alert("Submitted listing!");
      // navigate to individual listing page
      navigate('/')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="mx-auto py-8 my-4 px-8 w-1/2 sm:max-md:w-5/6 bg-blue-100 rounded-xl">
      <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-semibold text-center">Offer Listing</h1>
        <div className="flex flex-col">
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="title"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="">
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="description"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="">
              <input
                type="text"
                name="description"
                id="description"
                autoComplete="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 mt-4 w-full">
            <label
              htmlFor="address-line"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              Address Line
            </label>
            <div className="">
              <input
                type="text"
                name="address-line"
                id="address-line"
                autoComplete="address-line"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 my-2">
            <div class="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                class="block text-md font-semibold leading-6 text-gray-900"
              >
                City
              </label>
              <div>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <div>
                <label
                  htmlFor="price-range"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  State
                </label>
                <select
                  name="state"
                  id="state"
                  value={state}
                  onChange={handleStateChange}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-md font-semibold leading-6 text-gray-900"
              >
                Zip Code
              </label>
              <div>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                  class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/* university */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="university"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              University
            </label>
            <div>
              <input
                type="text"
                name="university"
                id="university"
                autoComplete="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          <hr class="my-6 h-0.5 border-t-0 bg-black" />

          <h2 className="text-xl font-semibold my-4">Housing Details</h2>

          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="type"
              className="block text-md font-semibold leading-6 text-gray-900"
            >
              Type
            </label>
            <div>
              <select
                id="type"
                name="type"
                autocomplete="type"
                value={type}
                onChange={handleTypeChange}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
              </select>
            </div>
          </div>

          {/* distance  */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="monthly-rent"
              className="block text-md font-semibold leading-6 text-gray-900 "
            >
              Distance from University (in miles)
            </label>
            <div>
              <input
                type="number"
                name="monthly-rent"
                id="monthly-rent"
                min="0"
                autoComplete="monthly-rent"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          {/* rent */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="monthly-rent"
              className="block text-md font-semibold leading-6 text-gray-900 "
            >
              Monthly Rent Price
            </label>
            <div>
              <input
                type="number"
                name="monthly-rent"
                id="monthly-rent"
                min="0"
                autoComplete="monthly-rent"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
            </div>
          </div>

          <script src="../path/to/flowbite/dist/datepicker.js"></script>

          <div class="flex items-center my-4">
            <div class="relative">
              <label
                htmlFor="lease-start"
                className="block text-md font-semibold leading-6 text-gray-900"
              >
                Lease Start Date
              </label>
              <input
                name="lease-start"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date start"
              />
            </div>
            <span class="mx-4 mt-4 text-gray-500">to</span>
            <div class="relative">
              <label
                htmlFor="bedrooms"
                className="block text-md font-semibold leading-6 text-gray-900"
              >
                Lease End Date
              </label>
              <input
                name="lease-end"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date end"
              />
            </div>
          </div>

          {/* price range */}
          <div className="sm:col-span-3 my-4 w-full">
            <div className="grid grid-cols-2 gap-4 my-2">
              <div className="col-span-1">
                <label
                  htmlFor="bedrooms"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Bedrooms
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  min="0"
                  autoComplete="bedrooms"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="bathrooms"
                  className="block text-md font-semibold leading-6 text-gray-900"
                >
                  Bathrooms
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  id="bathrooms"
                  min="0"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  required
                  autoComplete="bathrooms"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>
          </div>
          {/* roommate preference */}
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="room-type"
              className="block text-md font-semibold leading-6 text-gray-900 mt-2"
            >
              Room Type
            </label>
            <div>
              <select
                id="room-type"
                name="room-type"
                autoComplete="room-type"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
              </select>
            </div>
          </div>

          <fieldset className="my-4">
            <legend className="text-md font-semibold leading-6 text-gray-900">
              Tags
            </legend>
            <div className="mt-2 space-y-2">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="petfriendly"
                    name="petfriendly"
                    type="checkbox"
                    checked={petTag}
                    onChange={(e) => setPetTag(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="petfriendly"
                    className="font-medium text-gray-900"
                  >
                    Pet-Friendly
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="all-female"
                    name="all-female"
                    type="checkbox"
                    checked={femaleTag}
                    onChange={(e) => setFemaleTag(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="all-female"
                    className="font-medium text-gray-900"
                  >
                    All-Female Household
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="lgbtq"
                    name="lgbtq"
                    type="checkbox"
                    checked={lgbtqFriendlyTag}
                    onChange={(e) => setLgbtqFriendlyTag(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="lgbtq" className="font-medium text-gray-900">
                    LGBTQ-Friendly
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="furnished"
                    name="furnished"
                    type="checkbox"
                    checked={safeTag}
                    onChange={(e) => setSafeTag(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="furnished"
                    className="font-medium text-gray-900"
                  >
                    Safe at Night
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="furnished"
                    name="furnished"
                    type="checkbox"
                    checked={furnishedTag}
                    onChange={(e) => setFurnishedTag(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="furnished"
                    className="font-medium text-gray-900"
                  >
                    Furnished
                  </label>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="pool"
                    name="pool"
                    type="checkbox"
                    checked={poolTag}
                    onChange={(e) => setPoolTag(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="pool" className="font-medium text-gray-900">
                    Pool
                  </label>
                </div>
              </div>
              
            </div>
          </fieldset>
          <div className="sm:col-span-3 my-4 w-full">
            <label
              htmlFor="image-upload"
              className="block text-md font-semibold leading-6 text-gray-900 "
            >
              Upload Images
            </label>
            <div>
              <input
                type="file"
                name="image-upload"
                id="image-upload"
                onChange={(e) => setImage(e.target.files[0])}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              />
              <button type="button" onClick={handleUpload}> Upload Image </button>
              {
                    imageList.map(dataVal=><div>
                        <img src={dataVal} height="200px" width="200px" />
                        <br/> 
                    </div>)}            
                </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2  text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListingOfferForm;

