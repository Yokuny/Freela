import style from "./NavContent.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <h4>filtro</h4>
      <form>
        <label>
          Preço:
          <input name="price" type="range" />
        </label>

        <label>
          Distancia:
          <input name="distance" type="range" />
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
    </div>
  );
};
export default Navbar;
