import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <main className="w-full max-w-[1100px] mx-auto flex flex-col min-h-[100vh]">
      <Navbar />
      {children}
      <Footer className={`mt-auto`} />
    </main>
  );
}

export default Layout;
