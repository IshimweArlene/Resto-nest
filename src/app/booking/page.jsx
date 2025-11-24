 "use client";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter} from "next/navigation";

const Booking = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-24 py-16 lg:py-24 flex justify-center">
      <div className="flex flex-col py-12 sm:py-16 lg:py-20 gap-8 sm:gap-10 lg:gap-12 bg-pink-100 items-center w-full max-w-3xl text-center rounded-xl">
        <h1 className="text-[#ff9900] text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Your Booking Is Confirmed!
        </h1>
        <FaCheckCircle className="text-[#ff9900] font-bold rounded-full text-6xl sm:text-7xl lg:text-8xl mt-4 sm:mt-6" />
        <p className="text-black text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 px-2 sm:px-6 font-bold">
          Thank you for choosing us, and we look forward to welcoming you soon.
        </p>
        <button
          className="bg-[#ff9900] w-full sm:w-64 rounded-lg mt-6 sm:mt-8 h-12 sm:h-14 lg:h-16 text-lg sm:text-xl text-gray-700 font-bold"
          onClick={handleClick}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Booking;