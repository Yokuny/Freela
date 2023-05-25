import Image from "next/image";
import style from "./destino.module.css";

const CityCard = () => {
  return (
    <div className={style.card}>
      <Image height={100} width={100} src="/hotel.jpg" alt="a" />
      <div>
        <p>70.00 R$</p>
        <p>02/14 14:00</p>
      </div>
    </div>
  );
};
export default CityCard;
