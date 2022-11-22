import React from "react";
import axios from "axios";

import styles from "./index.module.scss";

const PageHome = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:7000/news").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <ul className={styles.cardList}>
        {data.map(({ id, title }) => (
          <li key={id} className={styles.cardItem}>
            {title}
          </li> // mock
        ))}
      </ul>
    </>
  );
};

export default PageHome;
