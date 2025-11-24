import { Archivo_Black } from "next/font/google";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaStar, FaClipboardList } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";  
import { BsCalendar2Date } from "react-icons/bs";
import { GiScooter } from "react-icons/gi";
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#FFF6EA] flex items-center justify-center">
        <div className="w-full px-6 sm:px-10 lg:pl-44 lg:pr-24 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className={archivoBlack.className}>
                <h1 className="text-black text-4xl sm:text-5xl lg:text-7xl mb-6 lg:mb-8 font-extrabold">
                  Welcome to <br />
                  <span className="text-[#ff9900]">RestoNest</span>
                </h1>
              </div>
              <p className="text-black text-lg sm:text-xl lg:text-2xl">
                Magnam assumenda nesciunt, at corporis eaque reprehenderit?
                Exercitationem voluptatem fuga voluptas deserunt rerum deleniti
                aut voluptatibus a.
              </p>
              <button className="text-white text-lg sm:text-xl lg:text-2xl bg-black rounded-2xl mt-8 lg:mt-10 font-bold px-8 py-3 sm:px-10 sm:py-4">
                View Menu
              </button>
            </div>
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <Image
                src={"/1.png"}
                alt="Restaurant Image"
                width={1600}
                height={900}
                className="rounded-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="bg-slate-100 w-full px-6 sm:px-10 lg:px-24 py-16">
        <div className="mt-16 lg:mt-24 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            <div className="flex items-center gap-4">
              <div className="bg-[#f59e0b] p-4 rounded-full text-white text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-xl">Locate Us</h4>
                <p className="text-lg text-gray-600">Riverside 25, San Francisco, California</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#f59e0b] p-4 rounded-full text-white text-xl">
                <FaClock />
              </div>
              <div>
                <h4 className="font-bold text-xl">Open Hours</h4>
                <p className="text-lg text-gray-600">Mon To Fri 9:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#f59e0b] p-4 rounded-full text-white text-xl">
                <FaClipboardList />
              </div>
              <div>
                <h4 className="font-bold text-xl">Reservation</h4>
                <p className="text-lg text-gray-600">hirestaurantate@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16 lg:my-32 items-center">
            <div className="flex justify-center">
              <Image
                src={"/2.png"}
                alt="Restaurant Image"
                width={1600}
                height={900}
                className="w-full h-auto max-w-xl"
              />
            </div>
            <div className="px-0 lg:px-9 lg:border-l border-gray-300 mt-8 lg:mt-0">
              <div>
                <h1 className="font-bold text-black text-3xl sm:text-4xl mb-3">The story</h1>
                <p className="text-gray-700 text-base sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste rem ipsam expedita,
                 odio, magnam iusto at vitae reprehenderit nisi itaque 
                 similique natus culpa deserunt, sunt distinctio ad delectus voluptates dolore!
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div>
                <h1 className="font-bold text-black text-3xl sm:text-4xl mb-3">1996</h1>
                <p className="text-gray-700 text-base sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                <h1 className="font-bold text-black text-3xl sm:text-4xl mb-3">2021</h1>
                <p className="text-gray-700 text-base sm:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center px-4 sm:px-10 lg:px-44">
           <p className="inline-block border-y border-[#ff9900]  text-lg sm:text-xl tracking-widest text-black px-1">MENU</p>
           <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl mt-6 mb-3 font-extrabold">Popular Dishes</h1>
           <p className="text-gray-800 text-base sm:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis repudiandae dolorem! consectetur adipisicing elit. Unde blanditiis repudiandae dolorem!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
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
             <div className="w-full max-w-xs sm:max-w-sm">
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

          <div className="mt-10 lg:mt-14 flex items-center justify-center">
            <button className="text-black text-lg sm:text-xl bg-[#ff9900] rounded-lg font-bold text-center px-8 py-3 sm:px-10 sm:py-4">See all dishes</button>
          </div>
        </div>
      </section>

      <div className="bg-pink-50 px-6 sm:px-10 lg:pl-44 lg:pr-16 py-20 lg:py-32 ">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-24">
          <h1 className="text-lg sm:text-xl text-black border-y-2 border-black inline-block p-1 tracking-widest font-bold">WHAT WE OFFER</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold tracking-wider mt-6 mb-4">Our Great Services</h1>
          <p className="text-base sm:text-lg text-black text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt facere eius a,blanditiis dicta, rerum veniam maxime quasi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center sm:justify-items-start">
          <div className="w-40 h-40 sm:w-48 sm:h-48 bg-[#292E36] flex items-center justify-center flex-col gap-4">
            <MdMenuBook className="text-6xl text-[#fab347]"/>
            <p className="text-lg sm:text-xl text-white text-center">Special Menus</p>
          </div>
          <div className="w-40 h-40 sm:w-48 sm:h-48 bg-[#292E36] flex items-center justify-center flex-col gap-4">
            <BsCalendar2Date className="text-6xl text-[#fab347]"/>
            <p className="text-lg sm:text-xl text-white text-center">Opened 24/7</p>
          </div>
          <div className="w-40 h-40 sm:w-48 sm:h-48 bg-[#292E36] flex items-center justify-center flex-col gap-4">
            <GiScooter className="text-6xl text-[#fab347]"/>
            <p className="text-lg sm:text-xl text-white text-center">Home Delivery</p>
          </div>
        </div>
       </div>
      </div>

      <div className="bg-slate-100 py-20 lg:py-32">
        <div className="text-center text-black px-4 sm:px-10">
          <h1 className="text-lg sm:text-xl mb-3 border-y border-amber-300 inline-block tracking-widest font-semibold">TESTIMONIAL</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-black">What our clients say</h1>
          <p className=" text-base sm:text-xl font-normal">We love to hear from our customers, so please leave a comment or say hello in email</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 px-6 sm:px-10 lg:px-14 py-16 lg:py-24 ">
          <div className="bg-[#343942] flex p-8 sm:p-10 lg:p-16 rounded-xl w-full max-w-sm text-white">
            <div className="flex flex-col items-start">
              <div className="flex items-center ">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Random Woman" width={90} height={100} className="rounded-full"/>
                <div className="flex flex-col ml-4">
                  <p className="font-bold">Natasha D</p>
                  <p className="text-sm text-gray-300">Salt Lake City</p>
                </div>
              </div>
              <p className="mt-6 max-w-md text-gray-200 pt-2 text-sm border-t border-gray-400">
               <i> "It is professional, considers everyone's time, can think about the whole
                problem. There are many variations of passages of Lorem Ipsum."</i>
              </p>
            </div>
          </div>

           <div className="bg-[#343942] flex p-8 sm:p-10 lg:p-16 rounded-xl w-full max-w-sm text-white">
            <div className="flex flex-col items-start">
              <div className="flex items-center ">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Random Woman" width={90} height={100} className="rounded-full"/>
                <div className="flex flex-col ml-4">
                  <p className="font-bold">Natasha D</p>
                  <p className="text-sm text-gray-300">Salt Lake City</p>
                </div>
              </div>
              <p className="mt-6 max-w-md text-gray-200 pt-2 text-sm border-t border-gray-400">
               <i> "It is professional, considers everyone's time, can think about the whole
                problem. There are many variations of passages of Lorem Ipsum."</i>
              </p>
            </div>
          </div>

           <div className="bg-[#343942] flex p-16 rounded-xl w-[443px] text-white">
            <div className="flex flex-col items-start">
              <div className="flex items-center ">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Random Woman" width={90} height={100} className="rounded-full"/>
                <div className="flex flex-col ml-4">
                  <p className="font-bold">Natasha D</p>
                  <p className="text-sm text-gray-300">Salt Lake City</p>
                </div>
              </div>
              <p className="mt-6 max-w-md text-gray-200 pt-2 text-sm border-t border-gray-400">
               <i> "It is professional, considers everyone's time, can think about the whole
                problem. There are many variations of passages of Lorem Ipsum."</i>
              </p>
            </div>
          </div>
       </div>

       <div className="text-center text-black px-4 sm:px-10 lg:px-40 xl:px-96">
          <h1 className="text-lg sm:text-xl mb-3 border-y border-amber-300 inline-block tracking-widest font-semibold">BLOG</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-black">Be First Who Read News</h1>
          <p className=" text-base sm:text-xl text-gray-800 font-light">We love to hear from our customers, so please leave a comment or say hello in email</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 lg:px-24 justify-items-center mt-10">
          <div className="w-full max-w-xl flex flex-col">
            <Image src={"/6.png"} alt="Dish Image" width={900} height={900} className="z-10 w-full mt-10 " />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <div className="flex flex-wrap my-6 gap-4 sm:gap-6 sm:ml-8 lg:ml-14">
                <h1 className="text-black border-y border-amber-300 tracking-widest text-sm sm:text-lg font-medium">RESTAURANTS</h1>
                <h1 className="text-black border-y border-amber-300 tracking-widest text-sm sm:text-lg font-medium">FEB 22, 2021</h1>
              </div>
              <h1 className="text-gray-900 text-xl sm:text-2xl px-4 sm:px-8 lg:px-14 sm:mr-8 lg:mr-14 text-start font-bold">The Most Popular Delicious Food Of Mediterranean Cuisine</h1>
              <p className="text-gray-600 px-4 sm:px-8 lg:px-14 mt-6 text-sm sm:text-base">Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>  
            </div>
          </div>

          <div className="w-full max-w-xl flex flex-col">
            <Image src={"/7.png"} alt="Dish Image" width={900} height={900} className="z-10 w-full mt-10 " />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <div className="flex flex-wrap my-6 gap-4 sm:gap-6 sm:ml-8 lg:ml-14">
                <h1 className="text-black border-y border-amber-300 tracking-widest text-sm sm:text-lg font-medium">RESTAURANTS</h1>
                <h1 className="text-black border-y border-amber-300 tracking-widest text-sm sm:text-lg font-medium">FEB 22, 2021</h1>
              </div>
              <h1 className="text-gray-900 text-xl sm:text-2xl px-4 sm:px-8 lg:px-14 sm:mr-8 lg:mr-14 text-start font-bold">The Most Popular Delicious Food Of Mediterranean Cuisine</h1>
              <p className="text-gray-600 px-4 sm:px-8 lg:px-14 mt-6 text-sm sm:text-base">Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>  
            </div>
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
                <input type="text" placeholder="Name" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 text-black bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 w-full"/>
              </div>
              <div className="flex-1">
                <input type="text" placeholder="Email" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 w-full"/>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
              <div className="flex-1">
                <input type="text" placeholder="Person" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 w-full"/>
              </div>
              <div className="flex-1">
                <input type="text" placeholder="Timing" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 w-full"/>
              </div>
              <div className="flex-1">
                <input type="text" placeholder="Date" className="h-12 sm:h-14 lg:h-16 mt-4 px-4 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 w-full"/>
              </div>
            </div>
            <button className="w-full sm:w-64 h-12 sm:h-14 lg:h-20 rounded-lg text-lg sm:text-xl lg:text-2xl font-bold text-gray-950 mx-auto block bg-[#ff9900] mt-8 lg:mt-12">Book a Table</button>
          </form>
        </div>
      </div>

    </>
  );
}
