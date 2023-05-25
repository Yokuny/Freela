"use client";
import { useState } from "react";

import styles from "./page.module.css";
import CitySelect from "../../components/CitySelect";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <main className={styles.main}>
      <div>
        <CitySelect setCity={setSelectedCity} city={selectedCity} />
      </div>
      <div className={styles.cards}>
        <div>
          <p>Escolha a cidade que deseja visitar</p>
        </div>
        <div>
          <p>Veja as passagens disponiveis, com preço e data</p>
        </div>
        <div>
          <p>Veja todos os lugares aonde você pode se hospedar e todo o conforto que eles oferecem!</p>
        </div>
      </div>
    </main>
  );
}
