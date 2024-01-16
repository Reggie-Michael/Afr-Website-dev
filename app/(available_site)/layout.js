import Navbar from "@/components/Navbar";
import GetPath from "@app/hooks/GetPath";

export default function Layout({ children }) {
  "use client";

  return (
    <GetPath>
      <section className={"gap-14 main-wrap"}>
        <Navbar />
        {children}
      </section>
    </GetPath>
  );
}
