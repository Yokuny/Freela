import Card from "./Card.js";
import style from "./NavContent.module.css";

const Content = ({ title, data }) => {
  return (
    <div className={style.content}>
      <h2>{title}</h2>
      <div className={style.cards}>
        {data.map((item) => {
          cidade_destino: "Porto Alegre";
          cidade_partida: "Rio de Janeiro";
          companhia_aerea: "Qatar Airways";
          hora_chegada_formatada: "07/06 03:07";
          hora_partida_formatada: "28/05 17:47";
          id: 87;
          preco: "563.36";
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
            />
          );
        })}
      </div>
    </div>
  );
};
export default Content;
