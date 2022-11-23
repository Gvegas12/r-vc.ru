import React from "react";
import { UI } from "../../UI";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="d-flex align-center">
            <div className={"d-flex align-center left-wrapper"}>
              <img
                className={styles.burger}
                src="http://localhost:7000/static/svg/burger.svg"
                alt="burger"
              />
              <img
                className={styles.logo}
                src="http://localhost:7000/static/img/logo.png"
                alt="logo"
              />
            </div>
            <div className="middle-wrapper">
              <div
                className={`${styles.middleWrapperContent} d-flex align-center justify-between`}
              >
                <input
                  className={styles.search_input}
                  type="text"
                  placeholder="Поиск"
                />
                <UI.Button className={styles.create_btn}>
                  <img
                    className={"icon mr-10"}
                    src="http://localhost:7000/static/svg/plus.svg"
                  />
                  <span>Создать</span>
                </UI.Button>
              </div>
            </div>
            <div className={"d-flex align-center justify-end right-wrapper"}>
              <img
                className={"icon mr-20"}
                style={{ width: "22px", height: "22px" }}
                src="http://localhost:7000/static/svg/bell.svg"
              />
              <UI.Button className={styles.create_btn}>
                <img
                  className={"icon mr-10"}
                  src="http://localhost:7000/static/svg/account.svg"
                />
                <span>Войти</span>
              </UI.Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
