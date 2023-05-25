import style from "./destino.module.css";
import CityCard from "./_CityCard.js";
const destino = () => {

  return (
    <div className={style.destino}>
      <navibar>
        <h4>filtro</h4>
        <form>
          <label>
            Preço:
            <input name="price" type="range" />
          </label>

          <label>
            Distancia:
            <input name="Distance" type="range" />
          </label>

          <label>
            Horas:
            <input name="price" type="range" />
          </label>
          <label>
            Disponibilidade:
            <input name="price" type="range" />
          </label>
        </form>
      </navibar>
      <main>
        <h2>Passagens</h2>
        <div className={style.cards}>
          <CityCard imgSrc={"/hotel.jpg"} />
          <CityCard imgSrc={"/ticket.jpg"} />
          <CityCard imgSrc={"/build.jpg"} />
          <CityCard imgSrc={"/ticket.jpg"} />
          <CityCard imgSrc={"/hotel.jpg"} />
          <CityCard imgSrc={"/build.jpg"} />
          <CityCard imgSrc={"/build.jpg"} />
          <CityCard imgSrc={"/hotel.jpg"} />
          <CityCard imgSrc={"/ticket.jpg"} />
          <CityCard imgSrc={"/hotel.jpg"} />
          <CityCard imgSrc={"/build.jpg"} />
          <CityCard imgSrc={"/hotel.jpg"} />
          <CityCard imgSrc={"/ticket.jpg"} />
          <CityCard imgSrc={"/build.jpg"} />
          <CityCard imgSrc={"/ticket.jpg"} />
          <CityCard imgSrc={"/hotel.jpg"} />
        </div>
      </main>
    </div>
  );
};
export default destino;
