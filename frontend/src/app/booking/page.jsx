 "use client";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter} from "next/navigation";
const Booking = () => {
    const router = useRouter();

  const handleClick = () => {
    router.push("/");
  }
    return (
        <div className="bg-white px-64 py-32">
          <div className="flex flex-col py-24 gap-12 bg-pink-100 items-center">
            <h1 className="text-[#ff9900] text-6xl font-extrabold">Your Booking Is confirmed!</h1>
            <FaCheckCircle className="text-[#ff9900]  font-bold rounded-full text-9xl mt-12 p-1" />
            <p className="text-black text-2xl mt-12 mx-80 text-center font-bold">Thank you for choosing us, and we look forward welcoming you soon.</p>
            <button className="bg-[#ff9900] w-96 rounded-lg mt-12 h-20 text-2xl text-gray-700 font-bold" onClick={handleClick}>Back to Home</button>
          </div>
        </div>
    );
}
 
export default Booking;