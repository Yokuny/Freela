import style from "./NavContent.module.css";

const Navbar = () => {
  return (
    <navbar className={style.navbar}>
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
    </navbar>
  );
};
export default Navbar;
