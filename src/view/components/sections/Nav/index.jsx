import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import { navItemsData } from "./utils";

const NavLink = ({ variant, children, isActive, to }) => (
  <Link
    to={to}
    className={`d-flex align-center ${styles.navLink}
    ${isActive ? " " + styles.active : ""}`}
  >
    <img
      className="icon mr-10"
      src={`http://localhost:7000/static/svg/${variant}.svg`}
    />
    <span>{children}</span>
  </Link>
);

const Nav = ({ className }) => {
  const [active, setActive] = React.useState(0);

  let classNames = className ? className + " " : "";
  return (
    <nav className={classNames + " " + styles.root}>
      <ul className={styles.nav_list}>
        {navItemsData.map(({ path, text, variant }, i) => (
          <li onClick={() => setActive(i)} key={i} className={styles.nav_item}>
            <NavLink
              to={path}
              variant={variant}
              isActive={active === i && true}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
