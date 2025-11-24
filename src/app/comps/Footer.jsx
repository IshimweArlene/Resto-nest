import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const Footer = () => {
  return (
    <div className={josefin.className}>
     <footer className="bg-black text-white pb-12 w-full">
      <div className="flex flex-col md:flex-row justify-between px-6 sm:px-10 md:px-20 gap-10 md:gap-0">
        <div className="flex-1 mt-10 md:mt-24 md:ml-10 leading-3 text-center md:text-left">
          <p className="inline-block border-y border-[#ff9900] mb-6 md:mb-12 text-lg md:text-xl px-1">CONTACT</p>
          <p className="text-lg md:text-xl mb-0.5">5 Rue Dalou, 75015 Paris</p>
          <p className="text-lg md:text-xl mb-1">
            <span className="text-[#ff9900]">Call</span>- +33 156 78 89 56
          </p>
          <p className="text-lg md:text-xl mb-1 text-[#ff9900]">restonest@gmail.com</p>
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <Image src={"/logo.png"} alt="logo" width={150} height={150} className="mb-4" />
          <div className="my-6 md:my-8 text-center">
            <p className="text-xl md:text-2xl">Join our mailing list for updates.</p>
            <p className="text-xl md:text-2xl">Get news & offers events.</p>
          </div>

          <div className="flex w-full justify-center">
            <div className="flex flex-col sm:flex-row items-center w-full max-w-xl">
              <input
                type="email"
                placeholder="Email"
                className="border-6 border-[#ff9900] rounded-t-md sm:rounded-tr-none sm:rounded-l-md px-3 py-2 text-lg md:text-2xl outline-none text-white mb-3 sm:mb-4 h-12 md:h-16 w-full sm:w-[450px] bg-transparent placeholder:text-gray-400"
              />
              <button className="bg-[#ff9900] border-l border-gray-600 font-bold text-gray-700 px-4 py-2 rounded-b-md sm:rounded-bl-none sm:rounded-r-md text-lg md:text-2xl h-12 md:h-16 mb-3 sm:mb-4 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          <p className="text-lg md:text-xl text-center px-4">
            © Copyright - <span className="text-[#ff9900]">RestoNest </span> 2024 |
            Designed by <span className="text-[#ff9900]">Sushmitha Shettigar</span>
          </p>
        </div>

        <div className="flex-1 mb-10 md:mb-20 mt-4 md:mt-6 flex flex-col items-center md:items-end">
          <div className="flex gap-4 text-2xl md:text-3xl md:ml-56 mb-6 md:mb-0">
            <a><FaFacebookF /></a>
            <a><FaTwitter /></a>
            <a><FaInstagram /></a>
            <a><FaPinterestP /></a>
          </div>

          <div>
            <p className="inline-block border-y border-[#ff9900] tracking-widest text-lg md:text-xl mt-6 md:mt-24 mb-6 md:mb-10 py-1 md:ml-44">
              WORKING HOURS
            </p>
            <div className="text-center md:text-end">
              <p className="text-lg md:text-xl">
                <span className="text-[#ff9900]">Mon-Fri</span>: 7.00am-10.00pm
              </p>
              <p className="text-lg md:text-xl">
                <span className="text-[#ff9900]">Sat</span>: 7.00am-6.00pm
              </p>
              <p className="text-lg md:text-xl">
                <span className="text-[#ff9900]">Sun</span>: 7.00am-6.00pm
              </p>
            </div>
          </div>
        </div>
      </div>
     </footer>
    </div>
   
  );
};

export default Footer;
