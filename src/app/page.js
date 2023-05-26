import styles from "./page.module.css";
import Cities from "/components/Cities.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Cities />
      </div>
      <div className={styles.cards}>
        <div>
          <p>Explore destinos e escolha a cidade que mais deseja visitar</p>
        </div>
        <div>
          <p>Tenha passagens disponiveis, com preço e data a sua escolha</p>
        </div>
        <div>
          <p>Encontre acomodações incríveis com o máximo de conforto!</p>
        </div>
      </div>
    </main>
  );
}
