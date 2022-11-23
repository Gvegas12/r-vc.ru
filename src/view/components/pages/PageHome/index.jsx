import React from "react";
import axios from "axios";
import NewsCard from "../../templates/NewsCard";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../../../data/router/utils/utils_publicRoutes";
import { DateTime } from "luxon";

import styles from "./index.module.scss";

const dt = DateTime;

const PageHome = () => {
  const [data, setData] = React.useState([]);
  const [dataSmart, setDataSmart] = React.useState([]);
  const [limit, setLimit] = React.useState(4);

  React.useEffect(() => {
    axios
      .get("http://localhost:7000/news")
      .then((res) => setData(res.data.articles));
  }, []);
  React.useEffect(() => {
    axios
      .get(`http://localhost:7000/news?limit=${limit}`)
      .then((res) => setDataSmart(res.data.articles));
  }, [limit]);

  return (
    <div className={styles.root}>
      <ul className={styles.newsList_smart + " mb-20"}>
        {dataSmart.map(({ id, title }, i) => (
          <li key={id} className={styles.newsItem_smart}>
            <Link to={HOME_ROUTE + i}>{title}</Link>
          </li>
        ))}
        <button
          className={styles.limitBtn}
          onClick={() => setLimit((prevState) => prevState + 4)}
        >
          Показать еще
        </button>
      </ul>
      <ul className={styles.newsList}>
        {data.map(({ id, ...newsInfo }, i) => (
          <li key={id} className={styles.newsItem}>
            <NewsCard index={i} {...newsInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageHome;
