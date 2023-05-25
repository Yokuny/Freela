"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "./layout.module.css";

import { Marck_Script } from "next/font/google";
const MarckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const router = useRouter();
  const previousPage = () => {
    router.back();
  };

  const currentPage = usePathname();
  const actualPage = currentPage.slice(1).toUpperCase();

  const homePage =
    currentPage === "/" ? (
      <></>
    ) : (
      <a onClick={previousPage}>
        <Image height={20} width={20} src={"/return.svg"} alt="return" />
      </a>
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
