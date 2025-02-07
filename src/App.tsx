import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
import "./index.scss";
import NotFound from "./pages/notFound/NotFound";
import Logement from "./pages/logements/Logement";

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
