import { Karla } from "next/font/google";
import Image from "next/image";
const karla = Karla({
  subsets: ["latin"], 
    weight: "400",
});
const Reservation = () => {
    return (
        <div className={karla.className}>
          <div className="bg-white p-24 flex flex-col items-center">
            <h1 className="text-xl text-gray-950 inline-block border-y-1 tracking-widest border-amber-300">RESERVATION</h1>
            <p className="text-gray-900 text-5xl mt-3 font-bold">Book The Seat Now Here Easily</p>

            <div className="grid grid-cols-2 gap-10 mt-10">
              <Image src={'/re.png'} alt="Reservation Image" width={600} height={500} className="rounded-lg" />

              <div>
                <h1 className="inline-block border-y border-amber-300 tracking-widest text-2xl text-gray-950 font-semibold">RESERVATION</h1>
                <h1 className="text-5xl text-black mt-4 font-semibold">Book your table now</h1>
                <p className="text-gray-600 text-2xl mt-4 text-start">The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.</p>
                <div className="flex gap-10 mt-6">
                  <input type="text" placeholder="Name" className="border-2 border-gray-300 rounded-lg p-2 mt-4 w-full h-20 text-black text-start text-2xl font-bold outline-none focus:outline-none" />
                  <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg p-2 mt-4 w-full text-black text-start text-2xl font-bold outline-none focus:outline-none" />
                </div>
                <div className="flex gap-10 mt-6">
                  <input type="text" placeholder="Name" className="border-2 border-gray-300 rounded-lg p-2 mt-4 w-full h-20 text-black text-start text-2xl font-bold outline-none focus:outline-none" />
                  <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg p-2 mt-4 w-full text-black text-start text-2xl font-bold outline-none focus:outline-none" />
                </div>
                <div className="flex gap-10 mt-6">
                  <input type="text" placeholder="Name" className="border-2 border-gray-300 rounded-lg p-2 mt-4 w-full h-20 text-black text-start text-2xl font-bold outline-none focus:outline-none" />
                  <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg p-2 mt-4 w-full text-black text-start text-2xl font-bold outline-none focus:outline-none" />
                </div>
                <button className="text-3xl font-bold text-black bg-[#ff9900] p-6 mt-10 w-64 rounded-lg h-20">Book a table</button>
              </div>
            </div>

            <div className="text-center">
              <h1 className="inline-block border-y-1 border-amber-300 text-black text-2xl mt-14 tracking-wider">GALLERY</h1>
              <h1 className="text-5xl mt-4 text-gray-950 font-bold">What You Can Expect From Us</h1>
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
        </div>
    );
}
 
export default Reservation;