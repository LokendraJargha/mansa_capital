"use client";
import { useState } from "react";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";

const ClientRootLayout = ({ children }) => {
  //   const [submenuContent, setSubmenuContent] = useState(null);

  //   const handleSubmenuClick = (submenu) => {
  //     setSubmenuContent(submenu);
  //   };

  return (
    <>
      <div className="flex">
        <div className="w-[20%]">
          {/* <Sidebar onSubmenuClick={handleSubmenuClick} /> */}
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Header />
          <div className="p-4">
            {/* {submenuContent === "Results" && <div>Results Content</div>}*/}
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClientRootLayout;