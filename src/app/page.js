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
      <main className="min-h-screen bg-[#FFF6EA] flex items-center justify-center">
        <div className={`${karla.className} w-full pl-44 pr-24`}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className={archivoBlack.className}>
                <h1 className="text-black text-7xl mb-8 font-extrabold">
                  Welcome to <br />
                  <span className="text-[#ff9900]">RestoNest</span>
                </h1>
              </div>
              <p className="text-black text-2xl">
                Magnam assumenda nesciunt, at corporis eaque reprehenderit?
                Exercitationem voluptatem fuga voluptas deserunt rerum deleniti
                aut voluptatibus a.
              </p>
              <button className="text-white text-2xl bg-black rounded-2xl mt-10 font-bold w-70 h-20">
                View Menu
              </button>
            </div>
            <div>
              <Image
                src={"/1.png"}
                alt="Restaurant Image"
                width={1600}
                height={900}
                className="rounded-2xl relative z-200 -mb-100"
              />
            </div>
          </div>
        </div>
      </main>

      <section className={`${karla.className} bg-slate-100 w-full px-24 py-16`}>
        <div className="mt-24 ">
          <div className="grid grid-cols-3 text-black">
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

          <div className="grid grid-cols-2 gap-10 my-32">
            <div>
              <Image
                src={"/2.png"}
                alt="Restaurant Image"
                width={1600}
                height={900}
              />
            </div>
            <div className="px-9 border-l-1 border-gray-300 ">
              <div>
                <h1 className="font-bold text-black text-4xl mb-3">The story</h1>
                <p className="text-gray-700 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste rem ipsam expedita,
                 odio, magnam iusto at vitae reprehenderit nisi itaque 
                 similique natus culpa deserunt, sunt distinctio ad delectus voluptates dolore!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                <h1 className="font-bold text-black text-4xl mb-3">1996</h1>
                <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <div>
                <h1 className="font-bold text-black text-4xl mb-3">2021</h1>
                <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              </div>
            </div>
          </div>

          <div className="text-center px-44">
           <p className="inline-block border-y border-[#ff9900]  text-2xl tracking-widest text-black px-1">MENU</p>
           <h1 className="text-black text-5xl mt-6 mb-3 font-extrabold">Popular Dishes</h1>
           <p className="text-gray-800 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis repudiandae dolorem! consectetur adipisicing elit. Unde blanditiis repudiandae dolorem!</p>
          </div>

          <div className="grid grid-cols-3 justify-between">
           <div className="w-[400px]">
              <Image
                src={"/3.png"}
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

          <div className="mt-14 flex items-center justify-center">
            <button className="text-black text-2xl bg-[#ff9900] rounded-lg font-bold text-center w-68 h-20">See all dishes</button>
          </div>
        </div>
      </section>

      <div className="bg-pink-50 pl-44 pr-16 py-32 ">
       <div className="grid grid-cols-2  ">
        <div className="pr-24">
          <h1 className="text-xl text-black border-y-2 border-black inline-block p-1 tracking-widest font-bold">WHAT WE OFFER</h1>
          <h1 className="text-5xl text-black font-bold tracking-wider mt-6 mb-4">Our Great Services</h1>
          <p className="text-xl text-black text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt facere eius a,blanditiis dicta, rerum veniam maxime quasi
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="w-48 h-48 bg-[#292E36] flex items-center justify-center flex-col gap-4">
            <MdMenuBook className="text-6xl text-[#fab347]"/>
            <p className="text-xl text-white">Special Menus</p>
          </div>
          <div className="w-48 h-48 bg-[#292E36] flex items-center justify-center flex-col gap-4">
            <BsCalendar2Date className="text-6xl text-[#fab347]"/>
            <p className="text-xl text-white">Opened 24/7</p>
          </div>
          <div className="w-48 h-48 bg-[#292E36] flex items-center justify-center flex-col gap-4">
            <GiScooter className="text-6xl text-[#fab347]"/>
            <p className="text-xl text-white">Home Delivery</p>
          </div>
        </div>
       </div>
      </div>

       
      <div className="bg-slate-100 py-32">
        <div className="text-center text-black">
          <h1 className="text-xl mb-3 border-y-1 border-amber-300 inline-block tracking-widest font-semibold">TESTIMONIAL</h1>
          <h1 className="text-5xl font-semibold mb-4 text-black">What our clients say</h1>
          <p className=" text-2xl font-normal">We love to hear from our customers, so please leave a comment or say hello in email</p>
        </div>
        <div className="grid grid-cols-3 justify-between px-14 py-24 ">
          <div className="bg-[#343942] flex p-16 rounded-xl w-[443px] text-white">
            <div className="flex flex-col items-start">
              <div className="flex items-center ">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Random Woman" width={90} height={100} className="rounded-full"/>
                <div className="flex flex-col ml-4">
                  <p className="font-bold">Natasha D</p>
                  <p className="text-sm text-gray-300">Salt Lake City</p>
                </div>
              </div>
              <p className="mt-6 max-w-md text-gray-200 pt-2 text-sm border-t-1 border-gray-400">
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
              <p className="mt-6 max-w-md text-gray-200 pt-2 text-sm border-t-1 border-gray-400">
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
              <p className="mt-6 max-w-md text-gray-200 pt-2 text-sm border-t-1 border-gray-400">
               <i> "It is professional, considers everyone's time, can think about the whole
                problem. There are many variations of passages of Lorem Ipsum."</i>
              </p>
            </div>
          </div>
       </div>

       <div className="text-center text-black px-96">
          <h1 className="text-xl mb-3 border-y-1 border-amber-300 inline-block tracking-widest font-semibold">BLOG</h1>
          <h1 className="text-5xl font-semibold mb-4 text-black">Be First Who Read News</h1>
          <p className=" text-2xl text-gray-800 font-light">We love to hear from our customers, so please leave a comment or say hello in email</p>
        </div>

        <div className="grid grid-cols-2 px-24 justify-between">
          <div className="w-5/6 flex flex-col">
            <Image src={"/6.png"} alt="Dish Image" width={900} height={900} className="z-10 w-full mt-10 " />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <div className="flex my-6 gap-6 ml-14">
                <h1 className="text-black border-y-1 border-amber-300 tracking-widest text-lg font-medium">RESTAURANTS</h1>
                <h1 className="text-black border-y-1 border-amber-300 tracking-widest text-lg font-medium">FEB 22, 2021</h1>
              </div>
              <h1 className="text-gray-900 text-2xl px-14 mr-14 text-start font-bold">The Most Popular Delicious Food Of Mediterranean Cuisine</h1>
              <p className="text-gray-600 px-14 mt-6">Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>  
            </div>
          </div>

          <div className="w-5/6 flex flex-col">
            <Image src={"/7.png"} alt="Dish Image" width={900} height={900} className="z-10 w-full mt-10 " />
            <div className="bg-slate-100 py-6 pl-6 pr-6 shadow-2xl">
              <div className="flex my-6 gap-6 ml-14">
                <h1 className="text-black border-y-1 border-amber-300 tracking-widest text-lg font-medium">RESTAURANTS</h1>
                <h1 className="text-black border-y-1 border-amber-300 tracking-widest text-lg font-medium">FEB 22, 2021</h1>
              </div>
              <h1 className="text-gray-900 text-2xl px-14 mr-14 text-start font-bold">The Most Popular Delicious Food Of Mediterranean Cuisine</h1>
              <p className="text-gray-600 px-14 mt-6">Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>  
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] flex items-center justify-center bg-cover bg-center bg-[url('/2.png')]">
       <div className="bg-white opacity-[47%] w-2/3 h-96 flex flex-col py-16 items-center">
        <h1 className="text-gray-400 font-bold inline-block border-y-1 border-amber-300">RESERVATION</h1>
        <h1 className="text-gray-400 font-extrabold text-4xl">Book your table now</h1>
        <form>
        <div className="flex ">
          <input type="text" placeholder="Name" className="w-80 h-12 mt-6 px-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700"/>
          <input type="text" placeholder="Name" className="w-80 h-12 mt-6 px-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700"/>

        </div>
        </form>
       </div>
      </div>

    </>
  );
}
