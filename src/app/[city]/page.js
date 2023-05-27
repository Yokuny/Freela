"use client";
import style from "./destino.module.css";
import Navbar from "/components/Navbar.js";
import Content from "/components/Content.js";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Passagens = () => {
  const currentPage = usePathname();
  const [cityId, setCityId] = useState(0);
  const [city, setCity] = useState("");
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const loadTickets = async () => {
      const tickets = await axios.get(`http://localhost:5001/ticket/${cityId}`);
      setTickets(tickets.data);
    };
    loadTickets();
  }, [cityId]);

  useEffect(() => {
    setCityId(currentPage.slice(1, 2));
    setCity(currentPage.slice(3).toUpperCase().split("-").join(" "));
  }, [currentPage]);

  return (
    <div className={style.destino}>
      <Navbar />
      <Content title={city} data={tickets} />
    </div>
  );
};
export default Passagens;
