"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import BlueButton from "./BlueButton";

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
      <li className="relative flex gap-2 flex-center items-center text-xl opacity-85 hover:opacity-100">
      {isActive(path) && (
          <div className="link-active -bottom-2 size-1.5 bg-white rounded-full"></div>
        )}
        <Link
          href={linkPath}
          className={`${
            pathname === linkPath
              ? "active font-semibold capitalize"
              : "font-semibold capitalize"
          }`}
        >
          {label}
        </Link>
        
      </li>
    );
  };

  // ...

  return (
    <header className="w-full flex items-center gap-12 px-[5%] box-border mt-10 z-10 backdrop-blur-0">
      <Link href="/" className="logo flex items-center font-inter">
        <Image
          src={"/assets/images/LOGO-writeup-1-White 1.svg"}
          width={152}
          height={57}
          alt="Logo"
          className="object-contain object-bottom"
        />
      </Link>
      <nav className="flex text-white w-full items-center font-inter justify-between">
        <ul className="flex gap-7 items-center">
          {navigationItems.map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </ul>
        <BlueButton content={"Start Building +"}/>
      </nav>
    </header>
  );
};

export default Navbar;
