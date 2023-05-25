"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./card.module.css";

const Card = ({ imgSrc }) => {
  const [cityName, setCityName] = useState("Venda Nova do Imigrante");
  const router = useRouter();

  const ticketInfo = (city) => {
    router.push("/passagens/" + city);
  };
  return (
    <div className={style.card} onClick={() => ticketInfo(cityName)}>
      <Image height={250} width={250} src={imgSrc} alt="a" />
      <div>
        <div className={style.date}>
          <Image height={16} width={16} src="/calendar.svg" alt="-" />
          <p>02/14 14:00</p>
        </div>
        <div className={style.value}>
          <Image height={16} width={16} src="/ticket.svg" alt="-" />
          <p>70,00</p>
        </div>
        <div>
          <p>{cityName}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
