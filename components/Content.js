import Card from "./Card.js";
import style from "./NavContent.module.css";

const Content = ({ title }) => {
  return (
    <div className={style.content}>
      <h2>{title}</h2>
      <div className={style.cards}>
        <Card imgSrc={"/hotel.jpg"} />
        <Card imgSrc={"/ticket.jpg"} />
        <Card imgSrc={"/build.jpg"} />
        <Card imgSrc={"/ticket.jpg"} />
        <Card imgSrc={"/hotel.jpg"} />
        <Card imgSrc={"/build.jpg"} />
        <Card imgSrc={"/build.jpg"} />
        <Card imgSrc={"/hotel.jpg"} />
        <Card imgSrc={"/ticket.jpg"} />
        <Card imgSrc={"/hotel.jpg"} />
        <Card imgSrc={"/build.jpg"} />
        <Card imgSrc={"/hotel.jpg"} />
        <Card imgSrc={"/ticket.jpg"} />
        <Card imgSrc={"/build.jpg"} />
        <Card imgSrc={"/ticket.jpg"} />
        <Card imgSrc={"/hotel.jpg"} />
      </div>
    </div>
  );
};
export default Content;
