import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function HomeLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="w-full max-w-[1100px] mx-auto flex flex-col min-h-[100vh]">
      <Navbar />
      {children}
      <Footer className={`mt-auto`} />
    </main>
  );
}

export default HomeLayout;
