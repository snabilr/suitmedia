"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const pathname = usePathname();
  console.log(pathname);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShow(scrollPos > currentScrollPos || currentScrollPos < 10);
    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        !show ? "-translate-y-full" : "translate-y-0"
      } bg-white bg-opacity-90`}
    >
      <nav className="flex justify-between items-center p-4">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              className={`${
                pathname === "/work" ? "text-orange-500" : "text-black"
              } hover:text-orange-500`}
              href="/work"
            >
              Work
            </Link>
          </li>
          {/* Add more Links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
