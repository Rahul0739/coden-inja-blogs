// import React from "react";
import styles from "./Header.module.scss";
interface IProps {
  topic: any;
  topicName: any;
  topicCount: any;
}
function Header(Props: IProps) {
  return (
    <div>
      <div className={styles.header}>
        <p>C0DEN-INJA</p>
        <p style={{ marginLeft: "20px", fontSize: "40px" }}>
          <span>Explore </span>
          <span style={{ color: "#a855f7" }}>Learn </span> <span>Build 🚀</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
