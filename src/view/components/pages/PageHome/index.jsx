import React from "react";
import axios from "axios";

import styles from "./index.module.scss";
import { HOME_ROUTE } from "../../../../data/router/utils/utils_publicRoutes";
import { Link } from "react-router-dom";

const PageHome = () => {
  const [data, setData] = React.useState([]);
  const [dataSmart, setDataSmart] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:7000/news")
      .then((res) => setData(res.data.articles));
  }, []);
  React.useEffect(() => {
    axios
      .get("http://localhost:7000/news?limit=5")
      .then((res) => setDataSmart(res.data.articles));
  }, []);

  return (
    <div className={styles.root}>
      <ul className={styles.cardList_smart + " mb-20"}>
        {dataSmart.map(({ id, title }) => (
          <li key={id} className={styles.cardItem_smart}>
            {title}
          </li>
        ))}
      </ul>
      <ul className={styles.cardList}>
        {data.map(({ id, title, author, description, urlToImage }) => (
          <li key={id} className={styles.cardItem}>
            <div className={styles.card}>
              <div className="d-flex justify-between">
                <div className={styles.infoContainer}>
                  <div className={styles.category}>
                    logo
                    <span>Services</span>
                  </div>
                  <div>{author || "NoName"}</div>
                  <div>7 hours</div>
                </div>
                <div className={styles.subscribe}>Подписаться</div>
              </div>
              <div>
                <Link to={HOME_ROUTE}>
                  <div>
                    <h3 className="mb-10">{title}</h3>
                    <p className="mb-10">{description}</p>
                  </div>
                  {urlToImage && (
                    <img width={"100%"} src={urlToImage} alt="Card" />
                  )}
                </Link>
              </div>
              <div className="d-flex justify-between">
                <div className={styles.infoContainer}>
                  <div>62</div>
                  <div>favorite</div>
                  <div>up</div>
                </div>
                <div>like</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageHome;
