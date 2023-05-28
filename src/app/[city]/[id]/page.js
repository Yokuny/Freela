"use client";
import style from "./city.module.css";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Destino() {
  const currentPage = usePathname();
  const router = useRouter();
  const [ticketId, setTicketId] = useState();
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const query = `http://localhost:5001/ticket/details/${ticketId}`;
    const loadCities = async () => {
      const ticket = await axios.get(query);
      setTicket(ticket.data);
    };
    loadCities();
  }, [ticketId]);

  useEffect(() => {
    const path = currentPage.split("/");
    setTicketId(path[path.length - 1]);
  }, [currentPage]);

  const backBtn = () => router.back();
  const showHotels = () => {
    console.log("äsasdasd");
  };
  return (
    <div className={style.details}>
      <span>
        <p>Cidade de destino:</p>
        <p>{ticket.destino}</p>
      </span>
      <span>
        <p>Cidade de origem:</p>
        <p>{ticket.origem}</p>
      </span>
      <span>
        <p>Companhia aérea:</p>
        <p>{ticket.companhia}</p>
      </span>
      <span>
        <p>Horário de partida:</p>
        <p>{ticket.horapartida}</p>
      </span>
      <span>
        <p>Horário previsto de chegada:</p>
        <p>{ticket.horachegada}</p>
      </span>
      <span>
        <p>Preço da passagem:</p>
        <p className={style.price}>{ticket.preco}</p>
      </span>
      <a onClick={backBtn} className={style.return}>
        Retornar
      </a>
      <a onClick={showHotels} className={style.confirm}>
        Confirmar
      </a>
    </div>
  );
}
export default Destino;
