import Location from "./Location";

const ReviewPage = () => {
  return (
    <div className="min-h-dvh">
      <div className="flex justify-center">
        <div className="max-w-[1250px] max-h-[800px]">
          <div className="max-w-[619px] mx-auto">
            <h3 className="text-[#BCA4FF] font-semibold mb-9 text-center ">
              PLANNING AHEAD
            </h3>
            <h1 className="text-[#4E4B66] font-bold text-5xl text-center ">
              Let’s review your <br />
              checklist of everything
            </h1>
          </div>
          <div className="mt-[120px] max-w-[1250px] max-h-[510px] flex relative mx-auto">
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
