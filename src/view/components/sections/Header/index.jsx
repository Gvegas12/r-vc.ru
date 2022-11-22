import React from "react";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className="flex-container">
          <div className={styles.wrapper_left}>
            <img
              src="http://localhost:7000/static/svg/burger.svg"
              alt="burger"
            />
            <img
              className={styles.logo}
              src="http://localhost:7000/static/svg/logo.svg"
              alt="logo"
            />
          </div>
          <div className={styles.wrapper_middle}>
            <div className={styles.middle_grid_container}>
              <input
                className={styles.search_input}
                type="text"
                placeholder="Поиск"
              />
            </div>
          </div>
          <div className={styles.wrapper_right}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
