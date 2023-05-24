"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./layout.module.css";

const Header = () => {
  const currentPage = usePathname();
  return (
    <>
      <header className={styles.header}>
        <span>
          <Link href={"./"}>Agência de Viagens</Link>
          <p>{currentPage}</p>
        </span>
        <Link href={"./"}>
          <Image height={20} width={20} src={"/return.svg"} alt="return" />
        </Link>
      </header>
    </>
  );
};
export default Header;
