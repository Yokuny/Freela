"use client";
import Card from "./Card.js";
import style from "./NavContent.module.css";

const Content = ({ title, data, type }) => {
  return (
    <div className={style.content}>
      <h2>{title}</h2>
      <div className={style.cards}>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              imgSrc={"/hotel.jpg"}
              destination={item.cidade_destino}
              airline={item.companhia_aerea}
              arrival={item.hora_chegada_formatada}
              leaving={item.hora_partida_formatada}
              price={item.preco}
              queryType={type}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Content;
