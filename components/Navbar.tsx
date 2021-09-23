import Link from 'next/link';
import styles from "../styles/Main.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/"><a className={styles.logo}>sumbyte.</a></Link>
      <Link href="https://scontent-arn2-2.xx.fbcdn.net/v/t1.18169-1/p320x320/16427377_10154069073641721_3062834018261504646_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=32rMRRcpLmsAX8zsSJH&_nc_ht=scontent-arn2-2.xx&oh=2055815f3aa170552ba38bb7b7accc1d&oe=61722B59"><a className={styles.myaccount}>My account</a></Link>
      <Link href="https://scontent-arn2-2.xx.fbcdn.net/v/t1.18169-9/13521986_10153507709156721_3062643223212446043_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=8eSVJGNvizkAX-H-Tdg&_nc_ht=scontent-arn2-2.xx&oh=96799e1b9f7781ce9b296a7a80f1aa50&oe=617399E3"><a className={styles.fund}>Fund</a></Link>
    </div>
  );
}

export default Navbar;
