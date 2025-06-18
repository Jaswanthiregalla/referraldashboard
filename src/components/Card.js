import React from "react";
import styles from "../styles/Card.module.css";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
} from "../assets/icons";

const data = [
  { label: "Total Balance", value: "$9,568.00", icon: icon1 },
  { label: "Discount Percentage", value: "60%", icon: icon2 },
  { label: "Total Referral", value: "300", icon: icon3 },
  { label: "Discount Amount", value: "$300", icon: icon4 },
  { label: "Commission Amount", value: "$465.00", icon: icon5 },
  { label: "Total Earning", value: "$158.00", icon: icon6 },
  { label: "Commission Discount", value: "40%", icon: icon7 },
  { label: "Total Bank Transfer", value: "$534.00", icon: icon8 },
];

function Card() {
  return (
    <div className={styles.grid}>
      {data.map((item, id) => (
        <div key={id} className={styles.card}>
          <img src={item.icon} alt={item.label} className={styles.icon} />
          <div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
