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
        <div className="bg-white p-44 grid grid-cols-2 gap-10">
          <div className="gap-4 flex flex-col">
            <h1 className="self-start text-xl text-black tracking-widest">
              <span className="border-y-2 border-amber-300 pb-1">ABOUT US</span>
            </h1>
            <h1 className="text-4xl tracking-widest text-black font-bold">
              Quality and Tradition
            </h1>
            <p className="text-2xl text-gray-700 font-normal">
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many desktop publishing packages.
            </p>
            <button className="bg-[#ff9900] w-58 h-16 mt-4 text-xl font-bold rounded-lg text-center text-black">
              See More
            </button>
          </div>

          <div className="flex justify-center items-end">
            <Image src={"/9.png"} alt="About Us" width={400} height={500} />
          </div>
        </div>

        <div className={`${cormorant.className} grid grid-cols-4 px-24 gap-12`}>
          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-10">
            <MdRamenDining className="text-5xl text-amber-800" />
            <h1 className="text-black text-2xl">Fresh Product</h1>
            <p className="text-gray-900 text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-xl font-bold">See more</p>
          </div>

          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-10">
            <GiChefToque className="text-5xl text-amber-800" />
            <h1 className="text-black text-2xl">Skilled Chefs</h1>
            <p className="text-gray-900 text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-xl font-bold">See more</p>
          </div>

          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-10">
            <FaCocktail className="text-5xl text-amber-800" />
            <h1 className="text-black text-2xl">Drinks & Juices</h1>
            <p className="text-gray-900 text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-xl font-bold">See more</p>
          </div>

          <div className="bg-pink-100 flex flex-col gap-4 justify-center items-center p-10">
            <GiFruitBowl className="text-5xl text-amber-800" />
            <h1 className="text-black text-2xl">Fresh Product</h1>
            <p className="text-gray-900 text-lg text-center font-semibold tracking-wider">
              Professional considers everyone probls small niche family
            </p>
            <p className="text-[#ff9900] text-xl font-bold">See more</p>
          </div>
        </div>

        <div className="px-9 border-l-1 border-gray-300 mb-24">
          <div className="grid grid-cols-2 gap-10 my-32">
            <div>
              <Image src={"/2.png"} alt="Restaurant Image" width={1600} height={900} />
            </div>

            <div className="px-9 border-l-1 border-gray-300">
              <div>
                <h1 className="font-bold text-black text-4xl mb-3">The story</h1>
                <p className="text-gray-700 text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste rem ipsam expedita,
                  odio, magnam iusto at vitae reprehenderit nisi itaque 
                  similique natus culpa deserunt, sunt distinctio ad delectus voluptates dolore!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <h1 className="font-bold text-black text-4xl mb-3">1996</h1>
                  <p className="text-gray-700 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-black text-4xl mb-3">2021</h1>
                  <p className="text-gray-700 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-14 items-center justify-center mb-32 ">
          <div className="text-center">
           <h1 className="text-black mb-4 text-lg inline-block border-y-1 border-amber-300 tracking-widest ">TEAM</h1>
           <h1 className="text-black text-2xl font-semibold">Meet Our Professional Chefs</h1>
          </div>
          <div className="grid grid-cols-4 gap-24 justify-between items-center">
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c1.png'} width={200} height={200}/>
              <p className="text-black text-xl tracking-wider font-bold ">Avroko</p>
              <p className="text-gray-500 text-sm tracking-widest">Master Chef</p>
            </div>
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c2.png'} width={200} height={200}/>
              <p className="text-black text-xl tracking-wider font-bold ">Evan Matthews</p>
              <p className="text-gray-500 text-sm tracking-widest">Master Chef</p>
            </div>
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c3.png'} width={200} height={200}/>
              <p className="text-black text-xl tracking-wider font-bold ">Diane Clarkson</p>
              <p className="text-gray-500 text-sm tracking-widest">Master Chef</p>
            </div>
            <div className="bg-white flex-col flex items-center">
              <Image src={'/c4.png'} width={200} height={200}/>
              <p className="text-black text-xl tracking-wider font-bold ">Dan Raflin</p>
              <p className="text-gray-500 text-sm tracking-widest">Assistant Chef</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 items-center justify-center">
          <div className="text-center ">
           <h1 className="text-black mb-4 text-lg inline-block border-y-1 border-amber-300 tracking-widest ">Gallery</h1>
           <h1 className="text-gray-900 text-5xl tracking-wider font-semibold">What We Make</h1>
          </div>
         
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto py-10">
            <div className="flex flex-col gap-6">
              <Image src="/f1.png" alt="Food 1" width={300} height={200} className="rounded-lg object-cover" />
              <Image src="/f2.png" alt="Food 2" width={300} height={200} className="rounded-lg object-cover" />
            </div>

            <div className="row-span-2">
              <Image src="/f3.png" alt="Interior" width={600} height={640} className="w-full h-full object-cover rounded-lg" />
            </div>

            <div className="flex flex-col gap-6">
              <Image src="/f4.jpg" alt="Food 3" width={500} height={700} className="rounded-lg object-cover" />
              <Image src="/f5.jpg" alt="Drink" width={500} height={700} className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
             <div className="w-full h-[1000px] gap-12 flex items-center mb-24 justify-center bg-cover bg-center bg-[url('/8.jpg')]">
        <div className="bg-white/50 w-2/3 py-44 px-16 flex flex-col items-center">
          <h1 className="text-white font-bold inline-block border-y-1 mb-6 tracking-widest border-amber-300">RESERVATION</h1>
          <h1 className="text-white font-extrabold text-4xl">Book your table now</h1>
          <form className="w-full">
            <div className="flex gap-12 w-full">
              <div className="flex-1">
                <input type="text" placeholder="Name" className="h-16 mt-6 px-4 text-black text-xl bg-white rounded-lg border border-gray-300 focus:outline-none w-full"/>
              </div>
              <div className="flex-1">
                <input type="text" placeholder="Email" className="h-16 mt-6 px-4 bg-white text-black text-xl rounded-lg border border-gray-300 focus:outline-none w-full"/>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full">
              <div className="flex-1">
                <input type="text" placeholder="Person" className="h-16 mt-6 px-4 bg-white text-black text-xl rounded-lg border border-gray-300 focus:outline-none w-full"/>
              </div>
              <div className="flex-1">
                <input type="text" placeholder="Timing" className="h-16 mt-6 px-4 bg-white text-black text-xl rounded-lg border border-gray-300 focus:outline-none w-full"/>
              </div>
              <div className="flex-1">
                <input type="text" placeholder="Date" className="h-16 mt-6 px-4 bg-white text-black text-xl rounded-lg border border-gray-300 focus:outline-none w-full"/>
              </div>
            </div>
            <button className="w-64 h-20 rounded-lg text-2xl font-bold text-gray-950 mx-auto block bg-[#ff9900] mt-12">Book a Table</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
