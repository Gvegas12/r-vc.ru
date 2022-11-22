import React from "react";

const Nav = ({ className }) => {
  let classNames = className ? className + " " : "";
  return <div className={classNames}>Nav</div>;
};

export default Nav;
