"use client";

import { usePathname } from "next/navigation";

// to get pathname
const GetPath = () => {
  const pathname = usePathname();
  console.log(GetPath);
  return (
    path = pathname.split("/")[1]
  );
};

export default GetPath;
