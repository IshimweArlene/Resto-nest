'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "MENU", path: "/menu" },
    { name: "RESERVATION", path: "/reservation" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex items-center bg-black text-white p-4 mx-14">
      <div className="flex items-start ml-16 mr-36">
        <Image src="/logo.png" alt="Logo" width={75} height={75} />
      </div>

      <div className="cursor-pointer flex">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`font-bold mx-10 ${
              pathname === item.path ? "text-[#ff9900] underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-end ml-auto mr-16">
        <Link
          href="/login"
          className={`items-center p-2 tracking-widest justify-center text-center w-28 h-10 rounded-lg cursor-pointer transition duration-300 ease-in-out font-bold text-white flex ${
            pathname === "/login"
              ? "bg-amber-600"
              : "bg-[#ff9900] hover:bg-amber-600"
          }`}
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
