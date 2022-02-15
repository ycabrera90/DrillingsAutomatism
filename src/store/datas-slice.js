import { createSlice } from "@reduxjs/toolkit";

const DUMMY_DATAS = [
  {
    id: "p1",
    title: "RIVPERF22-PERF 01",
    workinkMode: "AUTO",
    pumpSt: true,
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
    pumpSt: false,
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
    pumpSt: true,
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

const initialState = { systemDatas: [] };

const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    fecthData(state) {
      // fetch datas from the server
      state.systemDatas = DUMMY_DATAS;
    },
  },
});

export const dataActions = data.actions;
export const dataReducer = data.reducer;
