import { Archivo_Black } from "next/font/google";
import { Karla } from "next/font/google";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaStar, FaClipboardList } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";  
import { BsCalendar2Date } from "react-icons/bs";
import { GiScooter } from "react-icons/gi";

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      {/* ...existing sections above... */}

      <div className="w-full h-[500px] flex items-center justify-center bg-cover bg-center bg-[url('/2.png')]"><br/>       <div className="bg-white opacity-[47%] w-2/3 h-96 flex flex-col py-16 items-center">
          <h1 className="text-gray-400 font-bold inline-block border-y-1 border-amber-300">RESERVATION</h1>
          <h1 className="text-gray-400 font-extrabold text-4xl">Book your table now</h1>
          <form>
            <div className="flex gap-6">
              <input type="text" placeholder="Name" className="w-80 h-12 mt-6 px-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />
              <input type="email" placeholder="Email" className="w-80 h-12 mt-6 px-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />
            </div>
            <div className="flex gap-6 mt-6">
              <input type="number" placeholder="Person" className="w-80 h-12 px-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />
              <input type="text" placeholder="Timing" className="w-80 h-12 px-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />
            </div>
            <div className="mt-6">
              <input type="date" className="w-[40rem] h-12 px-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700" />
            </div>
            <div className="mt-6 text-center">
              <button className="bg-[#f59e0b] hover:bg-[#e68900] text-white px-8 py-3 rounded-md font-semibold">
                Book a Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
