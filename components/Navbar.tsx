// components/Navbar.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  bg-black">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div>
            <Image className="ml-2"
                src={"/images/logo.png"}
                alt="hero image"
                width={140}
                height={40}
                />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/signin">
          <div className="text-white hover:text-slate-400">Sign In</div>
        </Link>
        <Link href="/signup">
          <div className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800">
            Sign Up
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
