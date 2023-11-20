import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[5em] flex items-center justify-center bg-[#ebfffe]">
      <p className="w-full h-[3em] flex items-center justify-center font-bold text-[2em] cursor-pointer">
        <Link href={"/"}>Unident</Link>
      </p>
    </div>
  );
};

export default Header;
