import React from "react";

import styles from "./index.module.scss";

const UIButton = ({ children, className }) => {
  let classNames = className ? " " + className : "";
  return (
    <button className={styles.root + " d-flex align-center" + classNames}>
      {children}
    </button>
  );
};

export default UIButton;
