"use client";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
const Order = () => {
    const router = useRouter();

   const handleClick = () => {
     router.push("/single-item");
   }
   const onClick = () => {
    router.push('/confirm');
   }
   const [value, setValue] = useState(1);

    return (
        <div className="bg-white py-32">
          <div className="grid grid-cols-2 px-28 mb-12">
            <Image src={'/si.png'} width={500} height={500} />
            <div>
                <h1 className="text-black text-5xl font-black ">Chicken Burger</h1>
                <p className="text-black text-3xl font-semibold mt-3">$13.0</p>
                <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
                    <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ccc' }} />
                    <div style={{ flex: 1, borderTop: '3px dashed #ccc', margin: '0 8px' }} />
                    <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ccc' }} />
                </div>
                <p className="text-2xl text-gray-600 mt-8 mb-12">Interactively procrastinate high-payoff content without backward compatible data uickly cultivate optimal processes and tactical  via accurate e-markets.</p>
                <p className="text-gray-900 font-medium text-2xl"><span className="text-[#e68d08] text-2xl font-semibold">CATEGORY:</span> Food</p>
                <p className="text-gray-900 font-medium text-2xl"><span className="text-[#e68d08] text-2xl font-semibold mt-3">TAGS:</span> Recipes, Sweet, Tasty</p>
            </div>
          </div>
          <div className="flex gap-12 ml-24 mb-24 px-28">
            <div className="flex items-center border-3 border-[#e68d08] rounded-lg w-28 h-16 text-gray-950 text-xl bg-white justify-between px-4">
              <span className="text-xl">{value}</span>
              <div className="flex flex-col ml-2">
                <button  className="text-gray-700 hover:text-amber-400" onClick={() => setValue(v => v + 1)} type="button" >
                  ▲
                </button>
                <button  className="text-gray-700 hover:text-amber-400" onClick={() => setValue(v => v + 1)} type="button" >
                  ▼
                </button>
              </div>
            </div>
            <button className="bg-[#ff9900] text-black text-2xl font-medium rounded-lg w-60 h-16" onClick={onClick}>Order Now</button>
          </div>
          <div className="flex gap-20 mb-8 px-32">
            <p className="text-gray-900 text-xl font-bold">DESCRIPTION</p>
            <p className="text-gray-400 text-xl font-medium">REVIEWS(0)</p>
          </div>
          <div className="w-full px-32 flex items-center my-4">
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ccc' }} />
            <div style={{ flex: 1, borderTop: '3px dashed #ccc', margin: '0 8px' }} />
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ccc' }} />
          </div>
          <h1 className="text-5xl text-gray-950 font-black mt-8 px-32">Description</h1>
          <p className="text-2xl text-gray-700 mt-6 mb-12 px-32">Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics resource leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.Proactively fabricate one-to-one materials effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products 
            leading-edge intellectual capitaligh standards in e-services.</p>
          <div className="px-32" style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ccc' }} />
            <div style={{ flex: 1, borderTop: '3px dashed #ccc', margin: '0 8px' }} />
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ccc' }} />
          </div>
          <div className="flex justify-between mt-36 px-32">
            <h1 className="text-5xl font-black text-black ">Related Dishes</h1>
            <button className="bg-[#ff9900] text-black text-2xl font-black rounded-lg w-64 border-2 border-gray-500 h-20">Order Now</button>
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
        </div>
    );
}
 
export default Order;