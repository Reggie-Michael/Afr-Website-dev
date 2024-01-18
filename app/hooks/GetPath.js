// GetPath.js
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GetPath = ({ children }) => {
  const pathname = usePathname();

  function sanitizePathname(pathname) {
    // Replace non-alphanumeric characters (except hyphens and slashes) with hyphen
    return pathname.replace(/[^a-zA-Z0-9/-]/g, "-");
  }

  useEffect(() => {
    const sanitizedPathname = sanitizePathname(pathname);
    const pathValue =
      sanitizedPathname === "/"
        ? "home"
        : sanitizedPathname.split("/")[1].toLowerCase();
    setPath(pathValue);
  }, [pathname]);

  const [path, setPath] = useState("");


  return (
    <section className={path}>
      {/* {console.log("Current Path:", path)} */}
      {children}
    </section>
  );
};

export default GetPath;
