import Navbar from "@/components/ui/navbar";
export default function RootLayout({ children }) {
  return (
    <div>
      <div className="flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
