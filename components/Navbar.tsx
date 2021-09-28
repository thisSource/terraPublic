import Link from 'next/link';
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/"><a className={styles.logo}>sumbyte.</a></Link>
      <Link href="./myaccount"><a className={styles.myaccount}>My account</a></Link>
      <Link href="./fund"><a className={styles.fund}>Fund</a></Link>
      <Link href="./campaign"><a className={styles.campaignsNavbar}>Campaigns</a></Link>
      <Link href="./app"><a className={styles.appNavbar}>Get Sumbyte app</a></Link>
    </div>
  );
}

export default Navbar;
