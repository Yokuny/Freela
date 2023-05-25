"use client";
import style from "./city.module.css";
import React from "react";
import { usePathname } from "next/navigation";

function Destino() {
  const currentPage = usePathname();
  const cityName = currentPage.split("/");

  return (
    <div className={style.city}>
      <h1>Passagem para {cityName[cityName.length - 1].toUpperCase()}</h1>
      <div className={style.details}>
        <span>
          <p>Cidade de destino:</p>
          <p>Afonso Claudio</p>
        </span>
        <span>
          <p>Cidade de origem:</p>
          <p>Venda Nova do imigrante</p>
        </span>
        <span>
          <p>Companhia aeria:</p>
          <p>Itaisul jazil</p>
        </span>
        <span>
          <p>Horario de partida:</p>
          <p>29/04 15h</p>
        </span>
        <span>
          <p>Horario previsto de chegada:</p>
          <p>30/04 16h</p>
        </span>
        <span>
          <p>Preço da passagem:</p>
          <p>700 R$</p>
        </span>
      </div>
    </div>
  );
}
export default Destino;
