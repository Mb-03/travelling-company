"use client";

const cardsArr = [
  {
    id: 1,
    img: "/Time.png",
    title: "Plan Trip Dates",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    img: "/plane.png",
    title: "Pay For Your Flights",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Learn More",
  },
  {
    id: 3,
    img: "/Money.png",
    title: "Plan Your Finances",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Learn More",
  },
];

const Cards2 = () => {
  return (
    <div className="flex justify-between items-center gap-8">
      {cardsArr.map((card) => (
        <div
          key={card.id}
          className="flex flex-col max-w-[369px] min-h-[522px] bg-white border border-[rgba(228,218,255,1)] rounded-2xl p-4"
        >
          <img
            src={card.img}
            alt={card.title}
            className="h-[180px] w-[303px] mx-auto"
          />

          <div className="flex flex-col items-center mt-6 px-4">
            <h2 className="text-xl text-black font-semibold mb-4 text-center">
              {card.title}
            </h2>
            <p className="text-gray-600 text-center mb-6 w-[200px]">{card.desc}</p>

            <button className="mt-10 bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition cursor-pointer w-[245px]">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards2;
