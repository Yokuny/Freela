"use client";
import style from "./city.module.css";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import unidecode from "unidecode";

function Destino() {
  const currentPage = usePathname();
  const router = useRouter();

  const [ticketId, setTicketId] = useState();
  const [ticket, setTicket] = useState([]);

  //mudar o rertorno do ticket para vir com o id da cidade
  console.log(ticket);

  useEffect(() => {
    const query = `${process.env.URL}ticket/details/${ticketId}`;
    const loadTicket = async () => {
      try {
        const ticket = await axios.get(query);
        setTicket(ticket.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadTicket();
  }, [ticketId]);

  useEffect(() => {
    const path = currentPage.split("/");
    setTicketId(path[path.length - 1]);
  }, [currentPage]);

  const backBtn = () => router.back();
  const showHotels = () => {
    //mudar a query acrescentando o id da cidade
    const city = unidecode(ticket.destino).replace(/ /g, "-");
    router.push(`/hospedagens/10|${city}`);
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
