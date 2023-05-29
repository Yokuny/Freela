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
    const query = "http://localhost:5001/";
    const loadCities = async () => {
      try {
        const cities = await axios.get(query);

        const cityList = cities.data.map((city) => {
          return { value: city.nome, label: city.nome, id: city.id };
        });
        setCities(cityList);
      } catch (err) {
        console.log(err);
      }
    };
    loadCities();
  }, []);

  const handleChoice = (option) => {
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
      onChange={handleChoice}
    />
  );
};

export default Cities;
