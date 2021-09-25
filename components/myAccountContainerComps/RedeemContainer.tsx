import styles from "../../styles/MyAccount.module.css";

function RedeemContainer(){
    return (
        <div className={styles.balanceContainer}>
            <div className={styles.balance}>Redeem funds</div>
            <div className={styles.redeembutton}>Next step</div>
            {/* <div className={styles.funddevelopment}> + 4,5 %</div> */}
            
        </div>
    )
}

export default RedeemContainer