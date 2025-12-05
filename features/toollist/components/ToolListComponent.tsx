"use client";

import Cards2 from "./Cards2";

const ToolListComponent = () => {
  return (
    <div className="w-full flex justify-center py-16 bg-gray-100">
      <div className="w-full max-w-[1200px] flex flex-col gap-16">

        {/* HEADER ROW */}
        <div className="flex justify-between items-start gap-10">
          <h1 className="max-w-[300px] text-3xl text-rgba(78, 75, 102, 1) font-bold leading-tight" style={{ color: "rgba(78, 75, 102, 1)" }}>
            Use our assortment of travel plan tools
          </h1>

          <p className="max-w-[300px] text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet,
            consectetur.
          </p>
        </div>

        {/* CARDS */}
        <Cards2 />
      </div>
    </div>
  );
};

export default ToolListComponent;
