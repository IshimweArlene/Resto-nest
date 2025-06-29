import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex  items-center bg-black text-white p-4 mx-14">
            <div className="flex items-start ml-16 mr-36">
                <Image src="/logo.png" alt="Logo" width={75} height={75} />
            </div>
            <div>
                <a className="font-bold mx-10">HOME </a>
                <a className="font-bold mx-10">ABOUT </a>
                <a className="font-bold mx-10">MENU </a>
                <a className="font-bold mx-10">RESERVATION </a>
                <a className="font-bold mx-10">CONTACT </a> 
           </div>
           <div className="flex items-end ml-auto mr-16">
            <button 
             className="bg-[#ff9900] w-24 h-8 rounded-lg cursor-pointer hover:bg-amber-600 transition duration-300 ease-in-out font-bold text-white"
            >
                <Link href="/login">LOGIN</Link>                
            </button>
           </div>
        </nav>
    );
}
 
export default Navbar;