import { createSlice } from "@reduxjs/toolkit";

const DUMMY_SYSTEMS = {
  p1: {
    systemName: "RIVPERF22-PERF 01",
    dateData: "10/10/2022 21:41",
    service: "Moirones",
    claims: [
      { id: "c1", active: true },
      { id: "c2", active: true },
    ],

    drill: {
      name: "PERF 01",
      dateData: "10/10/2022 21:41",
      workinkMode: "AUTO",
      pumpSt: true,
      measures: [
        { title: "Presión", value: 1.25, unit: "bar" },
        { title: "Caudal", value: 15.2, unit: "m3/h" },
        { title: "Nivel del pozo", value: -12, unit: "m" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
      ],
    },

    tank: {
      name: "Tanque de Moirones 1",
      dateData: "10/10/2022 21:41",
      measures: [
        { title: "Altura", value: 1.61, unit: "mts" },
        { title: "Porciento", value: 28.3, unit: "%" },
        { title: "Volumen", value: 22, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
      ],
    },
  },
  p2: {
    systemName: "RIVPERF23-PERF 02",
    service: "Moirones",
    claims: [
      { id: "c1", active: true },
      { id: "c2", active: false },
    ],

    drill: {
      name: "PERF 02",
      dateData: "10/10/2022 21:41",
      workinkMode: "LOCAL",
      pumpSt: false,
      measures: [
        { title: "Presión", value: 1.25, unit: "bar" },
        { title: "Caudal", value: 15.2, unit: "m3/h" },
        { title: "Nivel del pozo", value: -12, unit: "m" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
      ],
    },

    tank: {
      name: "Tanque de Moirones 2",
      dateData: "10/10/2022 21:41",
      measures: [
        { title: "Altura", value: 1.61, unit: "mts" },
        { title: "Porciento", value: 28.3, unit: "%" },
        { title: "Volumen", value: 22, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
      ],
    },
  },
  p3: {
    systemName: "RIVPERF24-PERF 03",
    service: "Moirones",
    claims: [],
    drill: {
      name: "RIVPERF22",
      dateData: "10/10/2022 21:41",
      workinkMode: "REMOTO",
      pumpSt: true,
      measures: [
        { title: "Presión", value: 1.25, unit: "bar" },
        { title: "Caudal", value: 15.2, unit: "m3/h" },
        { title: "Nivel del pozo", value: -12, unit: "m" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
      ],
    },

    tank: {
      name: "Tanque de Moirones 3",
      dateData: "10/10/2022 21:41",
      measures: [
        { title: "Altura", value: 1.61, unit: "mts" },
        { title: "Porciento", value: 28.3, unit: "%" },
        { title: "Volumen", value: 22, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
        { title: "Dummy", value: 11, unit: "m3" },
      ],
    },
  },
};

const initialState = { systemDatas: {} };

const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    fecthData(state) {
      // fetch datas from the server
      state.systemDatas = DUMMY_SYSTEMS;
    },
  },
});

export const dataActions = data.actions;
export const dataReducer = data.reducer;
