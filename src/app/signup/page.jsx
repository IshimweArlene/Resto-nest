import { FcGoogle } from "react-icons/fc";
import { Karla } from "next/font/google";
import Link from "next/link";

const karla = Karla({
    subsets: ['latin'],
    weight: ['400', '700'], 
});
const signUp = () => {
    return (
        <div className={karla.className}>
            <div className="flex-1 flex flex-col items-center min-h-screen bg-white">
                <form className="w-2/3 bg-[#FFF6EA] p-8 rounded-lg my-20">
                    <div className="text-center mt-10 mb-10">
                        <p className="inline-block border-y border-[#ff9900]  text-2xl tracking-widest text-black px-1">SIGN UP</p>
                        <p className="text-gray-800 mt-4 text-2xl font-extralight">Let's Start Your Dinner With Us</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full mb-10 px-8">
                        <input type="text" placeholder="Name" className="h-20 p-10 rounded-xl text-black font-extrabold text-2xl border-2 border-gray-400 focus:outline-none w-full"/>
                        <input type="email" placeholder="Email" className="h-20 p-10 rounded-xl text-black font-extrabold text-2xl border-2 border-gray-400 focus:outline-none w-full"/>
                        <input type="text" placeholder="Phone Number" className="h-20 p-10 rounded-xl text-black font-extrabold text-2xl border-2 border-gray-400 focus:outline-none w-full"/>
                        <input type="password" placeholder="Password" className="h-20 p-10 rounded-xl text-black font-extrabold text-2xl border-2 border-gray-400 focus:outline-none w-full"/>
                        <input type="text" placeholder="Address" className="h-32 p-10 rounded-xl text-black font-extrabold text-2xl border-2 border-gray-400 focus:outline-none w-full"/>
                        <input type="text" placeholder="ZIP CODE" className="h-20 p-10 rounded-xl text-black font-extrabold text-2xl border-2 border-gray-400 focus:outline-none w-full" />
                    </div>
                    <div className="px-8 flex flex-1 flex-col  items-center gap-12">
                        <button className="bg-amber-500 text-center text-3xl text-gray-800 font-extrabold w-full h-20 rounded-xl cursor-pointer">SIGNUP</button>
                        <p className="text-black text-2xl font-medium">Already have an account? <Link href="/login" className="font-bold text-amber-600 underline">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default signUp;