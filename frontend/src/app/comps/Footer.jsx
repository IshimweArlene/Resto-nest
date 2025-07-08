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
     <footer className="mx-18 mt-24">
      <div className="flex flex-row justify-between">
        <div className="flex-1 mt-48 ml-10 leading-3">
          <p className="inline-block border-y border-[#ff9900] mb-12 text-xl px-1">CONTACT</p>
          <p className="text-xl mb-0.5">5 Rue Dalou, 75015 Paris</p>
          <p className="text-xl mb-1">
            <span className="text-[#ff9900]">Call</span>- +33 156 78 89 56
          </p>
          <p className="text-xl mb-1 text-[#ff9900]">restonest@gmail.com</p>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <Image src={"/logo.png"} alt="logo" width={150} height={150} className="mb-4" />
          <div className="my-8 text-center">
            <p className="text-2xl">Join our mailing list for updates.</p>
            <p className="text-2xl">Get news & offers events.</p>
          </div>

          <div className="flex">
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="border-6 border-[#ff9900] rounded-l-md px-2 py-1 text-2xl outline-none text-white mb-4 h-16 w-[450px] bg-transparent placeholder:text-gray-400"
              />
              <button className="bg-[#ff9900] border-l-1 border-gray-600 font-bold text-gray-700 px-4 py-1.5 rounded-r-md text-2xl h-16 mb-4">
                Subscribe
              </button>
            </div>
          </div>

          <p className="text-xl text-center">
            © Copyright - <span className="text-[#ff9900]">RestoNest </span> 2024 |
            Designed by <span className="text-[#ff9900]">Sushmitha Shettigar</span>
          </p>
        </div>

        <div className="flex-1 mb-20 mt-6 ">
          <div className="flex gap-4 text-3xl ml-56">
            <a><FaFacebookF /></a>
            <a><FaTwitter /></a>
            <a><FaInstagram /></a>
            <a><FaPinterestP /></a>
          </div>

          <div>
            <p className="inline-block border-y border-[#ff9900] tracking-widest text-xl mt-24 mb-10 py-1 ml-44">
              WORKING HOURS
            </p>
            <div className="text-end">
              <p className="text-xl">
                <span className="text-[#ff9900]">Mon-Fri</span>: 7.00am-10.00pm
              </p>
              <p className="text-xl">
                <span className="text-[#ff9900]">Sat</span>: 7.00am-6.00pm
              </p>
              <p className="text-xl">
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
