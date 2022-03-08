import { useCallback, useState } from "react";

import ConfigButton from "./ConfigButton/ConfigButton";
import cls from "./CardData.module.css";

const CardData = ({
  className,
  title,
  children,
  config,
  quickView,
  largeView,
}) => {
  const [isDeployed, setIsDeployed] = useState(true);

  const onClickHandler = useCallback(() => {
    setIsDeployed((prevState) => !prevState);
  }, []);


  return (
    <section className={`${cls.datas} ${className ? className : ""}`}>
      {title && <header className={cls["title"]}>{title}</header>}
      {config && <ConfigButton onClick={onClickHandler} clicked={isDeployed} />}
      <main className={cls["data-container"]}>
        {children && children}
        {!isDeployed && quickView}
        {isDeployed && largeView}
      </main>
    </section>
  );
};

export default CardData;
