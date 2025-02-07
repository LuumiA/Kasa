import React, { ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "./Layout.scss";

// Interface pour gérer le type en TypeScript
interface layoutProps {
  children: ReactNode;
}

export const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
