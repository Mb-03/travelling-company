const Footer = () => {
  const services = ["Planning", "Financing", "Purchasing", "Meeting", "Flying"];

  const continents = [
    "North America",
    "South America",
    "Asia",
    "Africa",
    "Europe",
    "Australia",
  ];

  const contact = {
    email: "travelulu@website.com",
    address: [
      "22 Street Address,",
      "Suburb Address",
      "Main City, PO Box",
      "Country",
    ],
    phone: "08 8888 88888",
  };
  return (
    <div>
      <div
        className="
      max-w-[1170px] h-[437px] rounded-4xl
      bg-[#4524b9] flex flex-col items-center justify-center 
      mx-auto overflow-hidden px-6 text-white
    "
      >
        <p className=" w-[605px] h-[99px] flex items-center justify-center text-center text-[48px] font-semibold ">
          Need more information to get started?
        </p>

        <button
          className=" w-[218px] 
       font-semibold text-[16px] 
         mt-10
    px-10 py-3 
    border border-white rounded-full 
    text-sm  tracking-wide text-white
    hover:bg-white hover:text-[#5932EA] 
    transition-colors duration-200 cursor-pointer"
        >
          CONTACT US
        </button>
      </div>{" "}
      <div className=" max-w-[1240px] h-[350px] ml-[145px] mt-[92px] flex  ">
        <div className="max-w-[265px] h-[246px] mr-[209px] ">
          <h2 className="text-2xl text-[#5F2EEA] pb-[30px]  "> Travelulu</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            ullamcorper magna, ac laoreet ex. Integer a consequat lectus. Nullam
            tortor sem
          </p>
          <p className="mt-[25px] text-[#000000]">
            Copyright 2021, All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-[155px] ">
          <div>
            <h2 className="text-xl font-semibold mb-5">Services</h2>
            <ul className="space-y-4 text-[#6E7191]">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}{" "}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-5">Continents</h2>
            <ul className="space-y-4 text-[#6E7191]">
              {continents.map((Continent) => (
                <li key={Continent}>{Continent}</li>
              ))}{" "}
            </ul>
          </div>
          <div className="space-y-4 ">
            <h2 className="text-xl font-semibold mb-5 ">Contacts</h2>
            <p className="text-[#5F2EEA]">{contact.email}</p>
            <p className="space-y-1 w-[180px] h-[100px] text-[#6E7191]">
              {contact.address}
            </p>
            <p className="text-[#6E7191]">{contact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
