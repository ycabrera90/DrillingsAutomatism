import React from "react";
import cls from "./Data.module.css";

const Data = ({ className, title, titlePosition = "top", value, unit }) => {
  return (
    <div
      className={
       `${cls["data-cotainer"]} 
        ${className ? className : ""} 
        ${titlePosition === "top" ? cls["top-tittle-layout"] : cls["left-tittle-layout"]}`
      }
    >
      {title && titlePosition === "top" && (
        <h1 className={cls["title-up"]}>{title}</h1>
      )}
      {title && titlePosition === "left" && (
        <h1 className={cls["title-left"]}>{title}</h1>
      )}
      <span className={cls["value"]}>{value}</span>
      <span className={cls["unit"]}>{" " + unit}</span>
    </div>
  );
};

export default Data;
