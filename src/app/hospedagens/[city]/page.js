"use client";
import style from "./page.module.css";
import Navbar from "/components/Navbar.js";
import Content from "/components/Content.js";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

const Hostings = ({ params }) => {
  const currentPage = usePathname();
  const [title, setTitle] = useState("");
  const [cityId, setCityId] = useState();
  const [hostings, setHostings] = useState([]);

  useEffect(() => {
    const [pathId, cityName] = currentPage.slice(1).split("|");
    const [, id] = pathId.split("/");
    console.log("id");
    console.log(id);
    setCityId(id);
    setTitle(cityName.toUpperCase().split("-").join(" "));
  }, [currentPage]);

  useEffect(() => {
    const query = `${process.env.URL}hospedagens/${cityId}`;
    const loadHostings = async () => {
      try {
        const hostings = await axios.get(query);

        console.log("hostings");
        console.log(hostings);

        setHostings(hostings.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadHostings();
  }, [cityId]);

  return (
    <div className={style.destino}>
      <Navbar />
      <Content title={title} data={hostings} type="hostings" />
    </div>
  );
};
export default Hostings;
