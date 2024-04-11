import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex gap-8 items-center">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <div className="md:flex items-center gap-6 hidden">
          <h2 className="hover:scale-105 hover:text-primary">Home</h2>
          <h2 className="hover:scale-105 hover:text-primary">Services</h2>
          <h2 className="hover:scale-105 hover:text-primary">About Us</h2>
        </div>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
