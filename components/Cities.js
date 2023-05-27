"use client";
import style from "./cities.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import axios from "axios";
import unidecode from "unidecode";

const Cities = () => {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const loadCities = async () => {
      const cities = await axios.get("http://localhost:5001/");

      const cityList = cities.data.map((city) => {
        return { value: city.nome, label: city.nome, id: city.id };
      });

      setCities(cityList);
    };
    loadCities();
  }, []);

  const handleCityChange = (option) => {
    const id = option.id;
    const city = unidecode(option.value).replace(/ /g, "-");
    router.push(`/${id}|${city}`);
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
