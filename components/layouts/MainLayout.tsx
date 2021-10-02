import { ReactNode } from "react";
import Navbar from "../Navbar";

function MainLayout(props: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export default MainLayout;
