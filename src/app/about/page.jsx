import Image from "next/image";
import { FaCocktail } from "react-icons/fa";
import { GiSalad, GiChefToque, GiFruitBowl } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";
import { Cormorant_Infant } from "next/font/google";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="bg-white px-6 sm:px-10 lg:px-44 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="gap-4 flex flex-col">
            <h1 className="self-start text-lg sm:text-xl text-black tracking-widest">
              <span className="border-y-2 border-amber-300 pb-1">ABOUT US</span>
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-widest text-black font-bold">
              Quality and Tradition
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-700 font-normal">
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many desktop publishing packages.
            </p>
            <button className="bg-[#ff9900] mt-4 text-lg sm:text-xl font-bold rounded-lg text-center text-black px-8 py-3 sm:px-10 sm:py-4 w-full sm:w-48">
              See More
            </button>
          </div>

          <div className="flex justify-center items-end mt-8 lg:mt-0">
            <Image src={"/9.png"} alt="About Us" width={400} height={500} className="w-full max-w-sm h-auto" />
          </div>
        </div>

        <div className={`${cormorant.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 sm:px-10 lg:px-24 gap-8 lg:gap-12 py-10`}>
          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-8 sm:p-10">
            <MdRamenDining className="text-4xl sm:text-5xl text-amber-800" />
            <h1 className="text-black text-xl sm:text-2xl">Fresh Product</h1>
            <p className="text-gray-900 text-base sm:text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-lg sm:text-xl font-bold">See more</p>
          </div>

          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-8 sm:p-10">
            <GiChefToque className="text-4xl sm:text-5xl text-amber-800" />
            <h1 className="text-black text-xl sm:text-2xl">Skilled Chefs</h1>
            <p className="text-gray-900 text-base sm:text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-lg sm:text-xl font-bold">See more</p>
          </div>

          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-8 sm:p-10">
            <FaCocktail className="text-4xl sm:text-5xl text-amber-800" />
            <h1 className="text-black text-xl sm:text-2xl">Drinks & Juices</h1>
            <p className="text-gray-900 text-base sm:text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-lg sm:text-xl font-bold">See more</p>
          </div>

          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-8 sm:p-10">
            <GiFruitBowl className="text-4xl sm:text-5xl text-amber-800" />
            <h1 className="text-black text-xl sm:text-2xl">Fresh Product</h1>
            <p className="text-gray-900 text-base sm:text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-lg sm:text-xl font-bold">See more</p>
          </div>
        </div>

        <div className="px-6 sm:px-10 lg:px-24 mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16 lg:my-32 items-center">
            <div className="flex justify-center">
              <Image src={"/2.png"} alt="Restaurant Image" width={1600} height={900} className="w-full h-auto max-w-xl" />
            </div>

            <div className="px-0 lg:px-9 lg:border-l border-gray-300 mt-8 lg:mt-0">
              <div>
                <h1 className="font-bold text-black text-3xl sm:text-4xl mb-3">The story</h1>
                <p className="text-gray-700 text-base sm:text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste rem ipsam expedita,
                  odio, magnam iusto at vitae reprehenderit nisi itaque 
                  similique natus culpa deserunt, sunt distinctio ad delectus voluptates dolore!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div>
                  <h1 className="font-bold text-black text-3xl sm:text-4xl mb-3">1996</h1>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-black text-3xl sm:text-4xl mb-3">2021</h1>
                  <p className="text-gray-700 text-base sm:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-14 items-center justify-center mb-20 lg:mb-32 px-6 sm:px-10 lg:px-24">
          <div className="text-center">
           <h1 className="text-black mb-4 text-lg inline-block border-y border-amber-300 tracking-widest ">TEAM</h1>
           <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold">Meet Our Professional Chefs</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-24 justify-items-center lg:justify-between items-center w-full">
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c1.png'} width={200} height={200} className="w-40 h-40 sm:w-48 sm:h-48 object-cover"/>
              <p className="text-black text-lg sm:text-xl tracking-wider font-bold ">Avroko</p>
              <p className="text-gray-500 text-xs sm:text-sm tracking-widest">Master Chef</p>
            </div>
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c2.png'} width={200} height={200} className="w-40 h-40 sm:w-48 sm:h-48 object-cover"/>
              <p className="text-black text-lg sm:text-xl tracking-wider font-bold ">Evan Matthews</p>
              <p className="text-gray-500 text-xs sm:text-sm tracking-widest">Master Chef</p>
            </div>
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c3.png'} width={200} height={200} className="w-40 h-40 sm:w-48 sm:h-48 object-cover"/>
              <p className="text-black text-lg sm:text-xl tracking-wider font-bold ">Diane Clarkson</p>
              <p className="text-gray-500 text-xs sm:text-sm tracking-widest">Master Chef</p>
            </div>
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c4.png'} width={200} height={200} className="w-40 h-40 sm:w-48 sm:h-48 object-cover"/>
              <p className="text-black text-lg sm:text-xl tracking-wider font-bold ">Dan Raflin</p>
              <p className="text-gray-500 text-xs sm:text-sm tracking-widest">Assistant Chef</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 items-center justify-center px-6 sm:px-10 lg:px-24 mb-16 lg:mb-24">
          <div className="text-center ">
           <h1 className="text-black mb-4 text-lg inline-block border-y border-amber-300 tracking-widest ">Gallery</h1>
           <h1 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-wider font-semibold">What We Make</h1>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto py-10">
            <div className="flex flex-col gap-4 sm:gap-6">
              <Image src="/f1.png" alt="Food 1" width={300} height={200} className="rounded-lg object-cover w-full h-48 sm:h-56" />
              <Image src="/f2.png" alt="Food 2" width={300} height={200} className="rounded-lg object-cover w-full h-48 sm:h-56" />
            </div>

            <div className="md:row-span-2">
              <Image src="/f3.png" alt="Interior" width={600} height={640} className="w-full h-64 sm:h-[500px] object-cover rounded-lg" />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <Image src="/f4.jpg" alt="Food 3" width={500} height={700} className="rounded-lg object-cover w-full h-48 sm:h-56" />
              <Image src="/f5.jpg" alt="Drink" width={500} height={700} className="rounded-lg object-cover w-full h-48 sm:h-56" />
            </div>
          </div>
        </div>

        <div className="w-full min-h-[600px] lg:h-[1000px] gap-8 lg:gap-12 flex items-center mb-16 lg:mb-24 justify-center bg-cover bg-center bg-[url('/8.jpg')] px-4 sm:px-8">
          <div className="bg-white/50 w-full max-w-3xl py-12 sm:py-16 lg:py-44 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
            <h1 className="text-white font-bold inline-block border-y mb-4 sm:mb-6 tracking-widest border-amber-300 text-sm sm:text-base">RESERVATION</h1>
            <h1 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center">Book your table now</h1>
            <form className="w-full mt-4 sm:mt-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                <div className="flex-1">
                  <input type="text" placeholder="Name" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 text-black text-base sm:text-lg bg-white rounded-lg border border-gray-300 focus:outline-none w-full"/>
                </div>
                <div className="flex-1">
                  <input type="text" placeholder="Email" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black text-base sm:text-lg rounded-lg border border-gray-300 focus:outline-none w-full"/>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
                <div className="flex-1">
                  <input type="text" placeholder="Person" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black text-base sm:text-lg rounded-lg border border-gray-300 focus:outline-none w-full"/>
                </div>
                <div className="flex-1">
                  <input type="text" placeholder="Timing" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black text-base sm:text-lg rounded-lg border border-gray-300 focus:outline-none w-full"/>
                </div>
                <div className="flex-1">
                  <input type="text" placeholder="Date" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black text-base sm:text-lg rounded-lg border border-gray-300 focus:outline-none w-full"/>
                </div>
              </div>
              <button className="w-full sm:w-64 h-12 sm:h-14 lg:h-20 rounded-lg text-lg sm:text-xl lg:text-2xl font-bold text-gray-950 mx-auto block bg-[#ff9900] mt-8 lg:mt-12">Book a Table</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
