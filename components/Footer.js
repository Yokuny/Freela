import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        <p>2023 ©</p>
        <Link href="https://github.com/Yokuny">yokuny</Link>
      </span>
      <span>
        <Image width={18} height={18} src={"/github.svg"} alt="github logo" />
        <Link href="https://github.com/Yokuny/shortly">front-end</Link>
        <Link href="https://github.com/Yokuny/projeto17-shortly">back-end</Link>
      </span>
    </footer>
  );
};
export default Footer;
