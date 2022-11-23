import React from "react";

import styles from './index.module.scss'

const CardSocialActions = () => {
  return (
    <div className="d-flex justify-between">
      <div className={styles.infoContainer}>
        <div>62</div>
        <div>favorite</div>
        <div>up</div>
      </div>
      <div>like</div>
    </div>
  );
};

export default CardSocialActions;
