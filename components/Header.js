"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Marck_Script } from "next/font/google";
const MarckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import styles from "./layout.module.css";

const Header = () => {
  const currentPage = usePathname();

  const actualPage = currentPage.slice(1).toUpperCase();

  const homePage =
    currentPage === "/" ? (
      <></>
    ) : (
      <Link href={"./"}>
        <Image height={20} width={20} src={"/return.svg"} alt="return" />
      </Link>
    );

  return (
    <>
      <header className={styles.header}>
        <span>
          <p className={MarckScript.className}>Agência de Viagens</p>
          <p>✈️</p>
          <p>{actualPage}</p>
        </span>
        {homePage}
      </header>
    </>
  );
};
export default Header;
