"use client";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";

const ClientRootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed w-full top-0 z-10">
        <Header />
      </div>
      <div className="flex flex-row flex-1 pt-16">
        <div className="w-[20%] h-full fixed top-16">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <div className="w-[80%] ml-[20%] overflow-y-auto p-4">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRootLayout;
