import { useCallback, useState } from "react";

import ConfigButton from "./ConfigButton/ConfigButton";
import classes from "./CardData.module.css";

const CardData = ({
  className,
  title,
  children,
  config,
  quickView,
  largeView,
}) => {
  const [isDeployed, setIsDeployed] = useState(false);

  const onClickHandler = useCallback(() => {
    setIsDeployed((prevState) => !prevState);
  }, []);

  return (
    <section className={`${classes.datas} ${className ? className : ""}`}>
      {title && <h1>{title}</h1>}
      {config && <ConfigButton onClick={onClickHandler} />}
      {children && children}
      {!isDeployed && quickView}
      {isDeployed && largeView}
    </section>
  );
};

export default CardData;
