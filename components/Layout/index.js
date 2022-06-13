import react from "react";
import Footer from "../Footer/index";
import Navbar from "../Navbar/index";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
