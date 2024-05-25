const ListingCard = (props) => {
  console.log(props.listing);

  const truncate = (str, n) => {
    return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
  };

  return (
    <div class="relative w-96 h-96 rounded-3xl overflow-hidden">
    <img src={props.listing.imageURL} alt="Avatar" class="object-cover w-full h-full" />
    <div className="absolute w-full py-4 bottom-0 inset-x-0 bg-blue-400 leading-4">
      <h2 className="text-white text-xl text-center">
      {props.listing.title}
      </h2>
      <p className="text-white text-xs text-center py-2">{truncate(props.listing.description, 100)}</p>
      <p className="text-white text-sm text-center">
        <span className="font-bold">${props.listing.monthlyRent}/month </span>| Aug 2022 - Aug 2023
        </p>

    </div>
    
  </div>
  );
};

export default ListingCard;
