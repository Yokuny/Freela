"use client";
import style from "./destino.module.css";
import Navbar from "/components/Navbar.js";
import Content from "/components/Content.js";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

const Passagens = () => {
  const currentPage = usePathname();
  const [city, id] = currentPage.slice(1).toUpperCase().split("-");

  useEffect(() => {
    const loadTickets = async () => {
      const tickets = await axios.get("http://localhost:5000/");
      console.log(tickets);
    };
    loadCities();
  }, []);

  return (
    <div className={style.destino}>
      <Navbar />
      <Content title={city} />
    </div>
  );
};
export default Passagens;
