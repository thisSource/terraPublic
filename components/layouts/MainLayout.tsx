import { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Headbar from "../Headbar";

function MainLayout(props: { children: ReactNode }) {
  return (
    <div>
      <Headbar />
      <Navbar />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
