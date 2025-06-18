import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ReferralOverview from "../components/ReferralOverview";
import ReferralLink from "../components/ReferralLink";
import ReferralTable from "../components/ReferralTable";
import Footer from "../components/Footer";
import styles from "../styles/ReferralPage.module.css";

function ReferralPage() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <Card />
        <ReferralOverview />
        <ReferralLink />
        <ReferralTable searchTerm={searchTerm} />
      </div>
      <Footer />
    </div>
  );
}

export default ReferralPage;
