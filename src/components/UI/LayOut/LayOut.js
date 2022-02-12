import React from "react";

import MainHeader from "../../MainHeader/MainHeader";

const LayOut = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default LayOut;
