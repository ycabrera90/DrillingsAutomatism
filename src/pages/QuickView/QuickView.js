import React from "react";
import classes from "./QuickView.module.css";

import QuickViewItem from "./QuickViewItem/QuickViewItem";

const QuickView = (props) => {
  const systemDatas = [
    {
      id: "p1",
      title: "RIVPERF22-PERF 01",
      workinkMode: "AUTO",
      claims: [
        { id: "c1", active: true },
        { id: "c2", active: true },
      ],
      measures: {
        tank: [
          { title: "Altura", value: 1.61, unit: "mts" },
          { title: "Porciento", value: 28.3, unit: "%" },
          { title: "Volumen", value: 22, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
        ],
        drill: [
          { title: "Presión", value: 1.25, unit: "bar" },
          { title: "Caudal", value: 15.2, unit: "m3/h" },
          { title: "Nivel del pozo", value: -12, unit: "m" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
        ],
      },
    },
    {
      id: "p2",
      title: "RIVPERF23-PERF 02",
      workinkMode: "LOCAL",
      claims: [],
      measures: {
        tank: [
          { title: "Altura", value: 1.61, unit: "mts" },
          { title: "Porciento", value: 28.3, unit: "%" },
          { title: "Volumen", value: 22, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
        ],
        drill: [
          { title: "Presión", value: 1.25, unit: "bar" },
          { title: "Caudal", value: 15.2, unit: "m3/h" },
          { title: "Nivel del pozo", value: -12, unit: "m" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
        ],
      },
    },
    {
      id: "p3",
      title: "RIVPERF24-PERF 03",
      workinkMode: "RAMOTO",
      claims: [],
      measures: {
        tank: [
          { title: "Altura", value: 1.61, unit: "mts" },
          { title: "Porciento", value: 28.3, unit: "%" },
          { title: "Volumen", value: 22, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
        ],
        drill: [
          { title: "Presión", value: 1.25, unit: "bar" },
          { title: "Caudal", value: 15.2, unit: "m3/h" },
          { title: "Nivel del pozo", value: -12, unit: "m" },
          { title: "Dummy", value: 11, unit: "m3" },
          { title: "Dummy", value: 11, unit: "m3" },
        ],
      },
    },
  ];

  const quickviewItems = systemDatas.map((item) => (
    <QuickViewItem key={item.id} data={item}></QuickViewItem>
  ));

  return (
    <>
      <section className={classes.background} />
      <section className={classes["quickview-container"]}>
        {quickviewItems}
      </section>
    </>
  );
};

export default QuickView;
