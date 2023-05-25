import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        <Link href="https://github.com/Yokuny">yokuny</Link>
      </span>
      <span>
        <Link href="https://www.linkedin.com/in/yokuny/">
          <Image width={18} height={18} src={"/linkedin.svg"} alt="linkdin logo" />
        </Link>
        <Link href="https://github.com/Yokuny">
          <Image width={18} height={18} src={"/github.svg"} alt="github logo" />
        </Link>
        <Link href="https://github.com/Yokuny/projeto18-freela-front">front-end</Link>
        <Link href="https://github.com/Yokuny/projeto18-freela-back">back-end</Link>
      </span>
    </footer>
  );
};
export default Footer;
