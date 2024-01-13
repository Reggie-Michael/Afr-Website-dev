"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/tech-impart", label: "Tech Impart" },
    { path: "/blog", label: "Blog" },
  ];

  const NavLink = ({ path, label }) => {
    const linkPath =
      path === "/" ? path : `/${label.toLowerCase().replace(" ", "-")}`;

    return (
      <li className="relative flex flex-col gap-1 flex-center items-center text-xl opacity-85 hover:opacity-100 hover:text-2xl">
        <Link
          href={linkPath}
          className={`${
            pathname === linkPath
              ? "active font-medium capitalize leading-tight"
              : "font-medium capitalize leading-tight"
          }`}
        >
          {label}
        </Link>
        {isActive(path) && (
          <div className="link-active absolute -bottom-2 w-1 h-1 bg-white rounded-full"></div>
        )}
      </li>
    );
  };

  // ...

  return (
    <header className="w-full flex items-center justify-between gap-2 px-[7.5%] py-4 box-border mt-9 z-10 backdrop-blur-0">
      <Link href="/" className="logo flex items-center w-3/12 font-poppins">
        <Image
          src={"/assets/images/LOGO-writeup-1-White 1.svg"}
          width={152}
          height={55}
          alt="Logo"
        />
      </Link>
      <nav className="flex text-white w-9/12 h-14 items-center ">
        <ul className="grid grid-cols-6 w-5/6 justify-around place-items-center h-full">
          {navigationItems.map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
