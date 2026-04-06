import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex bg-[#050505] min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-72">
          <Navbar />
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    );
  }
