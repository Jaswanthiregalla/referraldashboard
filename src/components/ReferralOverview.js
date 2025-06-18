import React from "react";
import styles from "../styles/ReferralOverview.module.css";

function ReferralOverview() {
  return (
    <div className={styles.overviewBox}>
      <div className={styles.row}>
        <div>
          <strong>Service</strong>
          <br />
          <span className={styles.link}>some service</span>
        </div>
        <div>
          <strong>Your Referrals</strong>
          <br />
          <span className={styles.amount}>0 + 0</span>
        </div>
        <div>
          <strong>Active Referrals</strong>
          <br />
          <span className={styles.amount}>0 + 0</span>
        </div>
        <div>
          <strong>Total Ref. Earnings</strong>
          <br />
          <span className={styles.amount}>$0.00</span>
        </div>
      </div>
    </div>
  );
}

export default ReferralOverview;
