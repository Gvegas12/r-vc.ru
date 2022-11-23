import React from "react";
import axios from "axios";
import NewsCard from "../../templates/NewsCard";

import styles from "./index.module.scss";

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
      <ul className={styles.newsList_smart + " mb-20"}>
        {dataSmart.map(({ id, title }) => (
          <li key={id} className={styles.newsItem_smart}>
            {title}
          </li>
        ))}
      </ul>
      <ul className={styles.newsList}>
        {data.map(({ id, ...newsInfo }) => (
          <li key={id} className={styles.newsItem}>
            <NewsCard {...newsInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageHome;
