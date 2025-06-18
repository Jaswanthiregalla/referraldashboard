import React, { useState } from "react";
import styles from "../styles/ReferralTable.module.css";
import data from "../data/referralData.json";

function ReferralTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <span>
          Show <input type="number" value={itemsPerPage} disabled /> Entries
        </span>

        {/* ✅ This is your working search input */}
        <input
          type="search"
          placeholder="Search by name..."
          className={styles.searchBox}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
        />
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, i) => (
              <tr key={i}>
                <td>{row.name}</td>
                <td>{row.service}</td>
                <td>{row.date}</td>
                <td>{row.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <p>
          Showing {startIndex + 1} to {startIndex + currentItems.length} of{" "}
          {filteredData.length} entries
        </p>
        <div className={styles.pagination}>
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
            Previous
          </button>
          {[...Array(totalPages)].map((_, id) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id + 1)}
              className={currentPage === id + 1 ? styles.active : ""}
            >
              {id + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReferralTable;
