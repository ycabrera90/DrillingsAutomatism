import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

import classes from './Tank.module.css';

const Tank = ({ className, maxValue, minValue, value, unit }) => {
  const dataSource = {
    chart: {
      lowerLimit: `${minValue}`,
      upperLimit: `${maxValue}`,
      numberSuffix: ` ${unit}`,
      showhovereffect: "1",
      theme: "fusion",
      bgColor: "#353C48",
      majorTMColor: "#fff",
      cylFillColor: "#239bff",
      baseFontColor: "#fff",
      baseFont: "Poppins, sans-serif",
      baseFontSize: "12",
      toolTipBgColor: "##353C48",
    },
    value: `${value}`,
  };

  return (
    <div className={`${classes.tank} ${className ? className : ""}`}>
      <ReactFC
        type="cylinder"
        width="100%"
        height="205"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  );
};


export default Tank;


