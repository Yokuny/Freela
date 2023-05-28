"use client";
import style from "./page.module.css";
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
    const query = `http://localhost:5001/ticket/${cityId}`;
    const loadTickets = async () => {
      const tickets = await axios.get(query);
      setTickets(tickets.data);
    };
    loadTickets();
  }, [cityId]);

  useEffect(() => {
    const [id, cityName] = currentPage.slice(1).split("|");
    setCityId(id);
    setCity(cityName.toUpperCase().split("-").join(" "));
  }, [currentPage]);

  return (
    <div className={style.content}>
      <Navbar />
      <Content title={city} data={tickets} />
    </div>
  );
};
export default Passagens;
