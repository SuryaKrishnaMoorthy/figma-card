const Card = ({ cardData }) => {
  const { title, price, description, image, days, rating } = cardData;
  console.log(image);
  return (
    <article
      aria-labelledby={`title-${title}`}
      className="rounded-[2rem] shadow-md bg-white max-w-md mx-auto font-sf-pro-display p-4"
    >
      <img
        src={image}
        alt={title}
        className="block w-full p-0 m-0 rounded-[1rem] h-64"
      />
      <div className="px-2 pt-4">
        <div className="card-title">
          <h2 id={`title-${title}`} className="text-2xl font-semibold">
            {title}
          </h2>
          <p className="text-sm text-[#525252]">
            ${price.toLocaleString()} per night
          </p>
        </div>
        <p className="card-descr text-[#525252] my-5 text-sm text-ellipsis line-clamp-3">
          {description}
        </p>
        <div
          role="group"
          aria-label={`Trip details of ${title}`}
          className="days-rating grid grid-cols-2 gap-4 text-sm text-[#525252]"
        >
          <div className="flex flex-col justify-center items-center border rounded-xl border-[#E2E2E299] bg-[#7979790D] p-3">
            Days <p className="text-xl font-semibold text-black">{days}</p>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-xl border-[#E2E2E299] bg-[#7979790D] p-3">
            Rating <p className="text-xl font-semibold text-black">{rating}</p>
          </div>
        </div>
        <button
          className="bg-black text-white font-semibold text-sm mt-5 py-3.5 text-center w-full rounded-lg hover:bg-gray-800 hover:scale-[1.01] transition delay-150 ease-linear focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={`Reserve ${title}`}
        >
          Reserve
        </button>
      </div>
    </article>
  );
};

export default Card;
