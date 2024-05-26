import { useState, useEffect } from "react";

import { db } from "../firebase";
import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";

function formatDateToMonthYear(dateString) {
  const date = new Date(dateString);
  const options = { month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const ListingCard = (props) => {
  const [saved, setSaved] = useState(false);
  const [userID, setUserID] = useState(null);



  const truncate = (str, n) => {
    if (!str || str.length == 0) return "";
    return str.length > n ? str.slice(0, n - 1) + "&hellip;" : str;
  };

  useEffect(() => {
    const userid = localStorage.getItem('userid');
    if (userid !== null) {
      setUserID(userid);
    }

    if (props.listing.savedByUser) {
      setSaved(true);
    }
  }, [props]);

  const save = async () => {
    await updateDoc(
      doc(db, "users", userID),
      {
        saved: arrayUnion(props.listing.id),
      }
    );
    setSaved(true);
  };

  const unsave = async () => {
    await updateDoc(
      doc(db, "users", userID),
      {
        saved: arrayRemove(props.listing.id),
      }
    );
    setSaved(false);
  };

  return (
    <div>
      {props.listing && (
        <div class="relative w-96 h-96 rounded-3xl overflow-hidden">
          <a href={`/listing/${props.listing.id}`}>
          <img
            src={props.listing.imageList[0]}
            alt="Avatar"
            class="object-cover w-full h-full"
          />

          {saved ? (
            <div
              className="absolute top-4 right-4 rounded-full bg-violet-200 p-2"
              onClick={unsave}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21.875V5.20833C5 4.63542 5.19583 4.14497 5.5875 3.73698C5.97917 3.32899 6.45 3.125 7 3.125H17C17.55 3.125 18.0208 3.32899 18.4125 3.73698C18.8042 4.14497 19 4.63542 19 5.20833V21.875L12 18.75L5 21.875Z"
                  fill="#000000"
                />
              </svg>
            </div>
          ) : (
            <div
              className="absolute top-4 right-4 rounded-full bg-white p-2"
              onClick={save}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#000000"
              >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
              </svg>
            </div>
          )}
          <div className="absolute w-full py-4 bottom-0 inset-x-0 bg-black/60 leading-4">
            <h2 className="text-white text-xl text-center">
              {props.listing.title}
            </h2>
            <p className="text-white text-xs text-center py-2 mx-4">
              {truncate(props.listing.description, 100)}
            </p>
            <p className="text-white text-sm text-center">
              <span className="font-bold">
                ${props.listing.rent}/month{" "}
              </span>
               |  {formatDateToMonthYear(props.listing.startDate)} to {formatDateToMonthYear(props.listing.endDate)}
            </p>
          </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default ListingCard;
