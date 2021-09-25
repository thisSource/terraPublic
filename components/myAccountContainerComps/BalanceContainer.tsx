import styles from "../../styles/MyAccount.module.css";


function BalanceContainer(){
    return (
        <div className={styles.balanceContainer}>
            <div className={styles.balance}>Your balance</div>
            <div className={styles.balanceamount}>SEK 84 153.34
            <div className={styles.funddevelopment}> + 4,5 %</div>
            </div>
            
        </div>
    )
}

export default BalanceContainer