import Image from "next/image";
import { Archivo_Black } from "next/font/google";
import { FaMapMarkerAlt, FaClock, FaStar, FaClipboardList } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";  
import { BsCalendar2Date } from "react-icons/bs";
import { GiScooter } from "react-icons/gi";

const Menu = () => {
  return (
    <div>
      <div className="bg-white py-12">
        <div className="text-center px-4 sm:px-10 lg:px-44">
          <p className="inline-block border-y border-[#ff9900] text-lg sm:text-xl tracking-widest text-black px-1">
            MENU
          </p>
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl mt-6 mb-3 font-extrabold">Popular Dishes</h1>
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis repudiandae dolorem! consectetur adipisicing elit. Unde blanditiis repudiandae dolorem!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-4 sm:px-10 lg:px-24 mt-8 mb-16">
          <div className="w-full max-w-xs sm:max-w-sm">
            <Image
              src={"/3.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10 w-full h-auto"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-xl sm:text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-lg sm:text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-base sm:text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-lg sm:text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-32 sm:w-40 h-10 rounded-lg hover:bg-[#e68900] transition text-sm sm:text-base">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm">
            <Image
              src={"/4.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10 w-full h-auto"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-xl sm:text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-lg sm:text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-base sm:text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-lg sm:text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-32 sm:w-40 h-10 rounded-lg hover:bg-[#e68900] transition text-sm sm:text-base">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm">
            <Image
              src={"/5.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10 w-full h-auto"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-xl sm:text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-lg sm:text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-base sm:text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-lg sm:text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image src={"/me1.png"} width={1500} height={200} alt="Image me1" className="mt-6 mb-16 w-full h-auto" />

        <div className="text-center px-4 sm:px-10 lg:px-44 ">
          <p className="inline-block border-y border-[#ff9900] text-lg sm:text-xl tracking-widest text-black px-1">
            MENU
          </p>
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl mt-6 mb-3 font-extrabold">Popular Dishes</h1>
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis repudiandae dolorem! consectetur adipisicing elit. Unde blanditiis repudiandae dolorem!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-4 sm:px-10 lg:px-24 mt-8 mb-16">
          <div className="w-full max-w-xs sm:max-w-sm">
            <Image
              src={"/3.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10 w-full h-auto"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-xl sm:text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-lg sm:text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-base sm:text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-lg sm:text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[400px]">
            <Image
              src={"/4.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[400px]">
            <Image
              src={"/5.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-32 sm:w-40 h-10 rounded-lg hover:bg-[#e68900] transition text-sm sm:text-base">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image src={"/me2.png"} width={1500} height={200} alt="Image me1" className="mt-6 mb-16 w-full h-auto" />
        <div className="text-center px-4 sm:px-10 lg:px-44">
          <p className="inline-block border-y border-[#ff9900] text-lg sm:text-xl tracking-widest text-black px-1">
            MENU
          </p>
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl mt-6 mb-3 font-extrabold">Popular Dishes</h1>
          <p className="text-gray-800 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis repudiandae dolorem! consectetur adipisicing elit. Unde blanditiis repudiandae dolorem!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-4 sm:px-10 lg:px-24 mt-8">
          <div className="w-full max-w-xs sm:max-w-sm">
            <Image
              src={"/3.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10 w-full h-auto"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-xl sm:text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-lg sm:text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-base sm:text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-lg sm:text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[400px]">
            <Image
              src={"/4.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[400px]">
            <Image
              src={"/5.png"}
              alt="Dish Image"
              width={400}
              height={500}
              className="z-10 mt-10"
            />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <p className="text-black text-2xl font-bold flex justify-between items-center">
                Lorem Epsum
                <span className="text-[#ff9900] text-xl font-bold">$13</span>
              </p>
              <div className="flex items-center justify-between gap-2 text-lg text-gray-700 ">
                <div className="flex gap-2">
                  <span className="text-xl">5.0</span>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
