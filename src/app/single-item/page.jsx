"use client";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Order = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/single-item");
  };

  const onClick = () => {
    router.push("/confirm");
  };

  const [value, setValue] = useState(1);

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 lg:mb-12 items-center">
        <div className="flex justify-center">
          <Image src={"/si.png"} width={500} height={500} className="w-full max-w-md h-auto rounded-xl" />
        </div>
        <div>
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-black">Chicken Burger</h1>
          <p className="text-black text-2xl sm:text-3xl font-semibold mt-3">$13.0</p>
          <div className="flex items-center my-4 sm:my-5">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 sm:mt-6 mb-6 sm:mb-8">
            Interactively procrastinate high-payoff content without backward compatible data quickly cultivate optimal
            processes and tactical via accurate e-markets.
          </p>
          <p className="text-gray-900 font-medium text-base sm:text-lg lg:text-xl">
            <span className="text-[#e68d08] text-base sm:text-lg lg:text-xl font-semibold">CATEGORY:</span> Food
          </p>
          <p className="text-gray-900 font-medium text-base sm:text-lg lg:text-xl mt-2">
            <span className="text-[#e68d08] text-base sm:text-lg lg:text-xl font-semibold">TAGS:</span> Recipes, Sweet,
            Tasty
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-10 lg:mb-16">
        <div className="flex items-center border-2 border-[#e68d08] rounded-lg w-28 h-12 sm:h-14 text-gray-950 text-lg bg-white justify-between px-3">
          <span className="text-lg sm:text-xl">{value}</span>
          <div className="flex flex-col ml-2">
            <button
              className="text-gray-700 hover:text-amber-400 leading-none"
              onClick={() => setValue((v) => v + 1)}
              type="button"
            >
              ▲
            </button>
            <button
              className="text-gray-700 hover:text-amber-400 leading-none"
              onClick={() => setValue((v) => v - 1)}
              type="button"
            >
              ▼
            </button>
          </div>
        </div>
        <button
          className="bg-[#ff9900] text-black text-lg sm:text-xl font-medium rounded-lg w-full sm:w-60 h-12 sm:h-14"
          onClick={onClick}
        >
          Order Now
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-4 sm:mb-6">
        <p className="text-gray-900 text-base sm:text-lg lg:text-xl font-bold">DESCRIPTION</p>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium">REVIEWS(0)</p>
      </div>

      <div className="w-full flex items-center my-4">
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-950 font-black mt-6 sm:mt-8">Description</h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-700 mt-4 sm:mt-6 mb-10 sm:mb-12">
        Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized
        metrics resource leveling processes. Objectively pursue diverse catalysts for change for interoperable
        meta-services. Proactively fabricate one-to-one materials effective e-business. Completely synergize scalable
        e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products leading-
        edge intellectual capital high standards in e-services.
      </p>

      <div className="flex items-center my-4">
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-16 lg:mt-24 gap-4 lg:gap-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">Related Dishes</h1>
        <button className="bg-[#ff9900] text-black text-lg sm:text-xl font-black rounded-lg w-full sm:w-64 border-2 border-gray-500 h-12 sm:h-14 lg:h-16">
          Order Now
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 mt-8 mb-10">
        <div className="w-full max-w-xs sm:max-w-sm">
          <Image src={"/li4.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10 w-full h-auto" />
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
                <button
                  className="bg-[#ff9900] text-white w-32 sm:w-40 h-10 rounded-lg hover:bg-[#e68900] transition text-sm sm:text-base"
                  onClick={handleClick}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm">
          <Image src={"/li5.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10 w-full h-auto" />
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
                <button
                  className="bg-[#ff9900] text-white w-32 sm:w-40 h-10 rounded-lg hover:bg-[#e68900] transition text-sm sm:text-base"
                  onClick={handleClick}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm">
          <Image src={"/li6.png"} alt="Dish Image" width={400} height={500} className="z-10 mt-10 w-full h-auto" />
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
                <button
                  className="bg-[#ff9900] text-white w-32 sm:w-40 h-10 rounded-lg hover:bg-[#e68900] transition text-sm sm:text-base"
                  onClick={handleClick}
                >
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

export default Order;