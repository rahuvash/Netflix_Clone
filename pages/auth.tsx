// pages/auth.tsx
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components";

const Auth = () => {
  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src="/images/hero.png"
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Auth;
