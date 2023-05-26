"use client";
import { useState, useEffect } from "react";
import Select from "react-select";
import style from "./cities.module.css";
import axios from "axios";

const Cities = () => {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const loadCities = async () => {
      const cities = await axios.get("http://localhost:5000/");

      const cityList = cities.data.map((city) => {
        return { value: city.nome, label: city.nome, id: city.id };
      });

      setCities(cityList);
    };
    loadCities();
  }, []);

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
  };

  const handleCityChoice = () => {
    console.log(city);
  };

  return (
    <Select
      onClick={handleCityChoice}
      className={style.input}
      placeholder="Selecione a cidade destino"
      options={cities}
      value={city}
      onChange={handleCityChange}
    />
  );
};

export default Cities;
