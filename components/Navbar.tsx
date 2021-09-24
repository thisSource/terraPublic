import Link from 'next/link';
import styles from "../styles/Main.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/"><a className={styles.logo}>sumbyte.</a></Link>
      <Link href="./myaccount"><a className={styles.myaccount}>My account</a></Link>
      <Link href="./fund"><a className={styles.fund}>Fund</a></Link>
    </div>
  );
}

export default Navbar;
