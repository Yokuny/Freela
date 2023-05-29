"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "./card.module.css";
import unidecode from "unidecode";

const Card = ({ id, imgSrc, destination, airline, arrival, leaving, price, queryType }) => {
  const router = useRouter();

  const search = () => {
    if (queryType == "hostings") router.push(`/hospedagens/info/${id}`);
    if (queryType == "tickets") {
      const city = unidecode(destination).replace(/ /g, "-");
      router.push(`/${city}/${id}`);
    }
  };

  return (
    <div className={style.card} onClick={() => search()}>
      <Image height={250} width={250} src={imgSrc} alt="a" />
      <div>
        <div className={style.airline}>
          <Image height={12} width={12} src="/airplane.svg" alt="-" />
          <p>{airline}</p>
        </div>
        <div className={style.arrival}>
          {/* <Image height={10} width={10} src="/calendar.svg" alt="-" /> */}
          <p>{arrival}</p>
        </div>

        <div className={style.leaving}>
          <Image height={16} width={16} src="/calendar.svg" alt="-" />
          <p>{leaving}</p>
        </div>
        <div className={style.value}>
          <Image height={16} width={16} src="/ticket.svg" alt="-" />
          <p>{price}</p>
        </div>
        <div>
          <p>{destination}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
