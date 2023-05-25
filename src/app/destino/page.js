import style from "./destino.module.css";
import CityCard from "./_CityCard.js";
const destino = () => {
  return (
    <div className={style.destino}>
      <navibar>
        <h4>filtro</h4>
        <form>
          <label for="price" value="asd" />
          <input name="price" type="text" />
          <label for="price" value="asd" />
          <input name="price" type="text" />
          <label for="price" value="asd" />
          <input name="price" type="text" />
          <label for="price" value="asd" />
          <input name="price" type="text" />
        </form>
      </navibar>
      <main>
        <h2>Passagens</h2>
        <div>
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </div>
      </main>
    </div>
  );
};
export default destino;
