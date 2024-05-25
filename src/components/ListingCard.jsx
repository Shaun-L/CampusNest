import { useState } from "react";

const ListingCard = (props) => {
  const [saved, setSaved] = useState(false);

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + "&hellip;" : str;
  };

  return (
    <div class="relative w-96 h-96 rounded-3xl overflow-hidden">
      <img
        src={props.listing.imageURL}
        alt="Avatar"
        class="object-cover w-full h-full"
      />

      {saved ? (
        <div
          className="absolute top-4 right-4 rounded-full bg-violet-200 p-2"
          onClick={() => setSaved(!saved)}
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
          onClick={() => setSaved(!saved)}
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
          <span className="font-bold">${props.listing.monthlyRent}/month </span>
          | Aug 2022 - Aug 2023
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
