import React from "react";
import styles from "../styles/ReferralLink.module.css";
import { FiCopy } from "react-icons/fi";

function ReferralLink() {
  const referralLink = "https://gobusiness.com/?referral=ABCXYZ";
  const referralCode = "ABCXYZ";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section className={styles.wrapper}>
      <h3 className={styles.heading}>Refer Friends And Earn More!!</h3>
      <div className={styles.row}>
        <div className={styles.box}>
          <h4>Your Referral Link</h4>
          <div className={styles.inputRow}>
            <input value={referralLink} readOnly className={styles.input} />
            <button
              className={styles.copyBtn}
              onClick={() => handleCopy(referralLink)}
            >
              <FiCopy /> Copy
            </button>
          </div>
        </div>
        <div className={styles.box}>
          <h4>Your Referral Code</h4>
          <div className={styles.inputRow}>
            <input value={referralCode} readOnly className={styles.input} />
            <button
              className={styles.copyBtn}
              onClick={() => handleCopy(referralCode)}
            >
              <FiCopy /> Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReferralLink;
