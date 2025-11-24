'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "MENU", path: "/menu" },
    { name: "RESERVATION", path: "/reservation" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white p-4 mx-0 md:mx-14 flex items-center relative">

      {/* Logo */}
      <div className="ml-4 md:ml-16 mr-4 md:mr-36">
        <Image src="/logo.png" alt="Logo" width={60} height={60} className="md:w-[75px] md:h-[75px]" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex cursor-pointer">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`font-bold mx-4 lg:mx-10 ${
              pathname === item.path ? "text-[#ff9900] underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop Login Button */}
      <div className="hidden md:flex ml-auto mr-4 md:mr-16">
        <Link
          href="/login"
          className={`items-center p-2 tracking-widest w-24 h-10 rounded-lg cursor-pointer transition font-bold text-white flex ${
            pathname === "/login"
              ? "bg-amber-600"
              : "bg-[#ff9900] hover:bg-amber-600"
          }`}
        >
          LOGIN
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden ml-auto mr-6 text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center py-6 z-50 md:hidden">

          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              onClick={() => setOpen(false)}
              className={`font-bold text-xl my-3 ${
                pathname === item.path ? "text-[#ff9900] underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className={`mt-4 p-2 tracking-widest w-32 h-10 rounded-lg flex items-center justify-center font-bold text-white ${
              pathname === "/login"
                ? "bg-amber-600"
                : "bg-[#ff9900] hover:bg-amber-600"
            }`}
          >
            LOGIN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
