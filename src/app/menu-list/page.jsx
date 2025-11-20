'use client';
import { useRouter } from "next/navigation";
import { FaSearch, FaStar } from "react-icons/fa";
import Image from "next/image";
import { use } from "react";

const List = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/single-item");
  }
  
  return (
    <div className="bg-white py-24 ">
      <div className="text-center px-44">
        <p className="inline-block border-y border-[#ff9900]  text-2xl tracking-widest text-black px-1">
          MENU
        </p>
        <h1 className="text-black text-5xl mt-6 mb-3 font-extrabold">Popular Dishes</h1>
      </div>

      <div className="relative">
        <input name="search" placeholder="Search Here" className="w-2xl mt-6 ml-24 rounded-lg h-16 pl-4 border-2 font-semibold border-[#ff9900] text-[#ff9900] focus:outline-none text-2xl" />
        <FaSearch className="absolute top-10 left-180 text-3xl font-extralight text-[#ff9900]" />
      </div>

      <div className="grid grid-cols-3 justify-between px-24 mb-16 mt-6">
        <div className="w-[400px]">
          <Image src={"/3.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition"  onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <Image src={"/4.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
          <Image src={"/5.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between px-24 mb-16 mt-6">
        <div className="w-[400px]">
          <Image src={"/li1.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
          <Image src={"/li2.jpg"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <Image src={"/li3.jpg"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
      <div className="grid grid-cols-3 justify-between px-24 mb-16 mt-6">
        <div className="w-[400px]">
          <Image src={"/li4.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <Image src={"/li5.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <Image src={"/li6.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between px-24 mb-16 mt-6">
        <div className="w-[400px]">
          <Image src={"/li7.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <Image src={"/li8.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <Image src={"/li9.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between px-24 mb-16 mt-6">
        <div className="w-[400px]">
          <Image src={"/li10.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
                <button className="bg-[#ff9900] text-white w-40 h-10 rounded-lg hover:bg-[#e68900] transition" onClick={handleClick}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <Image src={"/li9.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
          <Image src={"/li7.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10" />
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
  );
};

export default List;
