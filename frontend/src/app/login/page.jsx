import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
         <div className="flex-1 flex flex-col items-center min-h-screen bg-white">
            <form className="w-2/3 bg-[#FFF6EA] p-8 rounded-lg my-20">
                <div className="text-center mt-10 mb-10">
                 <p className="inline-block border-y border-[#ff9900]  text-2xl tracking-widest text-black px-1">LOGIN</p>
                 <p className="text-gray-800 mt-4 text-2xl font-extralight">Let's Start Your Dinner With Us</p>
                </div>
                <div className="flex flex-col items-center gap-4 mt-10 mb-10">
                 <input type="text" placeholder="Name" className="block w-2/3 h-20 text-start p-10 rounded-xl text-black font-extrabold text-2xl border-2 mb-6 border-gray-400 focus:outline-none"/>
                 <input type="email" placeholder="Email" className="block w-2/3 h-20 text-start p-10 rounded-xl text-black font-extrabold text-2xl border-2 mb-6 border-gray-400 focus:outline-none"/>
                 <input type="password" placeholder="Password" className="block w-2/3 h-20 text-start p-10 rounded-xl text-black font-extrabold text-2xl border-2 mb-6 border-gray-400 focus:outline-none" />
                 <button className="bg-amber-500 text-center text-2xl text-black font-bold w-2/3 h-20 rounded-xl cursor-pointer">LOGIN</button>
                 <p className="text-2xl text-black">OR</p>
                 <button className="border-3 border-amber-600 text-center flex items-center justify-center text-3xl text-gray-800 font-extrabold w-2/3 h-20 rounded-xl cursor-pointer"><FcGoogle className="text-4xl mr-3" />  Login With Google Account</button>
                 <p className="text-black text-2xl font-medium">Don't have an account? <Link href="/signup" className="font-bold text-amber-600 underline">Sign Up</Link></p>
               </div>

            </form>
         </div> 
        </div>
        
    );
}
 
export default Login;