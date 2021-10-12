import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function MainLayout(props: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
