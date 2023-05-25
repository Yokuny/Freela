"use client";
import style from "./destino.module.css";
import Navbar from "/components/Navbar.js";
import Content from "/components/Content.js";
import { usePathname } from "next/navigation";

const Passagens = () => {
  const currentPage = usePathname();
  const actualPage = currentPage.slice(1).toUpperCase();

  return (
    <div className={style.destino}>
      <Navbar />
      <Content title={actualPage} />
    </div>
  );
};
export default Passagens;
