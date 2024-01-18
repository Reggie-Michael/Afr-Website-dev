import Navbar from "@/components/Navbar";
import GetPath from "@app/hooks/GetPath";
import Loading from "@app/loading";
// import Script from "next/script";
import { Suspense } from "react";

export default function Layout({ children }) {
console.log("ready");

  return (
    <Suspense fallback={<Loading />}>
      <GetPath>
        <section className={"gap-14 main-wrap"}>
          <Navbar />
          {children}
        </section>
        
        
      </GetPath>
    </Suspense>
  );
}
