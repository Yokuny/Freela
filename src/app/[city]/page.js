"use client";
import style from "./page.module.css";
import Navbar from "/components/Navbar.js";
import Content from "/components/Content.js";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Tickets = () => {
  const currentPage = usePathname();
  const [cityId, setCityId] = useState(0);
  const [city, setCity] = useState("");
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const query = `${process.env.URL}ticket/${cityId}`;
    const loadTickets = async () => {
      try {
        const tickets = await axios.get(query);
        setTickets(tickets.data);
      } catch (err) {
        console.log(err);
      }
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
      <Content title={city} data={tickets} type="tickets" />
    </div>
  );
};
export default Tickets;
