import Image from "next/image";
import style from "./destino.module.css";

const CityCard = ({ imgSrc }) => {
  return (
    <div className={style.card}>
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
          <p>Venda no do imigrante</p>
        </div>
      </div>
    </div>
  );
};
export default CityCard;
