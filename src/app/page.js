"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Cities from "/components/Cities.js";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <main className={styles.main}>
      <div>
        <Cities setCity={setSelectedCity} city={selectedCity} />
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
