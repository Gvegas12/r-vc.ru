import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../../../data/router/utils/utils_publicRoutes";
import CardSocialActions from "../CardSocialActions";

import styles from "./index.module.scss";

const NewsCard = ({ author, title, description, urlToImage, index }) => {
  return (
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
        <Link to={HOME_ROUTE + index}>
          <div>
            <h3 className="mb-10">{title}</h3>
            <p className="mb-10">{description}</p>
          </div>
          {urlToImage && <img width={"100%"} src={urlToImage} alt="news" />}
        </Link>
      </div>
      <CardSocialActions />
    </div>
  );
};

export default NewsCard;
