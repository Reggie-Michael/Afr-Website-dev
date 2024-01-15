import Navbar from "@/components/Navbar";
import GetPath from "@app/hooks/GetPath";

export default function Layout({ children }) {
  // const path = GetPath;
  
  return (
    <section className="overflow-x-clip pt-12">
      <div className="before"></div>
      <div className="before2"></div>
      <Navbar />
      {children}
    </section>
  );
}
