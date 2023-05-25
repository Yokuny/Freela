"use client";
import { useState, useEffect } from "react";
import Select from "react-select";
import style from "./cities.module.css";

const Cities = ({ setCity, city }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    //request to get cities
    const cityList = [
      { value: "Venda Nova", label: "Venda Nova" },
      { value: "Pedra Azul", label: "Pedra Azul" },
      { value: "Afonso Claudio", label: "Afon Claudio" },
      { value: "Vitoria", label: "Vitoria" },
    ];

    setCities(cityList);
  }, []);

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  return (
    <Select
      className={style.input}
      placeholder="Selecione a cidade destino"
      options={cities}
      value={city}
      onChange={handleCityChange}
    />
  );
};

export default Cities;
