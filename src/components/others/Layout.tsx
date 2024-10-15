import { ReactNode } from "react";
import Header from "../section/Header";
import Footer from "../section/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
