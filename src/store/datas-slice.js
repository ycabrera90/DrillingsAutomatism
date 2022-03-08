import { createSlice } from "@reduxjs/toolkit";

const DUMMY_SYSTEMS = {
  p1: {
    systemName: "RIVPERF22-PERF 01",
    service: "Moirones",
    claims: [
      { id: "c1", active: true },
      { id: "c2", active: true },
    ],

    drill: {
      name: "PERF 01",
      dateData: "10/10/2022 21:41",
      isTx: false,
      workinkMode: "AUTO",
      pumpSt: false,
      measures: {
        ps: { title: "Presión", value: 1.25, unit: "bar" },
        cau: { title: "Caudal", value: 15.2, unit: "m3/h" },
        dl: { title: "Nivel del pozo", value: -12, unit: "m" },
      },
      performance: {
        daily: { hours: 3, minutes: 6 },
        total: { hours: 5040 },
      },
      control: {
        mode: "Automatico",
        startLevel: { value: 0.5, unit: "mts" },
        stopLevel: { value: 1.5, unit: "mts" },
      }
    },

    tank: {
      name: "Tanque de Moirones 1",
      dateData: "10/10/2022 21:41",
      isTx: true,
      measures: {
        htq: { title: "Altura", value: 1.61, unit: "mts" },
        prc: { title: "Porciento", value: 28.3, unit: "%" },
        vol: { title: "Volumen", value: 22, unit: "m3" },
      },
      alarms: {
        low: { value: 0.5, unit: "mts" },
        high: { value: 2.7, unit: "mts" },
      },
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
      isTx: true,
      workinkMode: "LOCAL",
      pumpSt: true,
      measures: {
        ps: { title: "Presión", value: 1.25, unit: "bar" },
        cau: { title: "Caudal", value: 15.2, unit: "m3/h" },
        dl: { title: "Nivel del pozo", value: -12, unit: "m" },
      },
      performance: {
        daily: { hours: 5, minutes: 2 },
        total: { hours: 3017 },
      },
      control: {
        mode: "Remoto",
        startLevel: { value: 0.7, unit: "mts" },
        stopLevel: { value: 1.2, unit: "mts" },
      }
    },

    tank: {
      name: "Tanque de Moirones 2",
      dateData: "10/10/2022 21:41",
      isTx: true,
      measures: {
        htq: { title: "Altura", value: 1.61, unit: "mts" },
        prc: { title: "Porciento", value: 28.3, unit: "%" },
        vol: { title: "Volumen", value: 22, unit: "m3" },
      },
      alarms: {
        low: { value: 0.3, unit: "mts" },
        high: { value: 1.8, unit: "mts" },
      },
    },
  },
  p3: {
    systemName: "RIVPERF24-PERF 03",
    service: "Moirones",
    claims: [],
    drill: {
      name: "RIVPERF22",
      dateData: "10/10/2022 21:41",
      isTx: true,
      workinkMode: "REMOTO",
      pumpSt: false,
      measures: {
        ps: { title: "Presión", value: 1.25, unit: "bar" },
        cau: { title: "Caudal", value: 15.2, unit: "m3/h" },
        dl: { title: "Nivel del pozo", value: -12, unit: "m" },
      },
      performance: {
        daily: { hours: 4, minutes: 9 },
        total: { hours: 1202 },
      },
      control: {
        mode: "Timer",
        startLevel: { value: 2.6, unit: "mts" },
        stopLevel: { value: 3.2, unit: "mts" },
      }
    },

    tank: {
      name: "Tanque de Moirones 3",
      dateData: "10/10/2022 21:41",
      isTx: true,
      measures: {
        htq: { title: "Altura", value: 1.61, unit: "mts" },
        prc: { title: "Porciento", value: 28.3, unit: "%" },
        vol: { title: "Volumen", value: 22, unit: "m3" },
      },
      alarms: {
        low: { value: 1.2, unit: "mts" },
        high: { value: 7.4, unit: "mts" },
      },
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

    setAlarm(state, action) {
      const { sysId, type, data } = action.payload;

      if (type === "low") {
        state.systemDatas[sysId].tank.alarms.low.value = data;
      }

      if (type === "high") {
        state.systemDatas[sysId].tank.alarms.high.value = data;
      }
    },

    incAlarm(state, { payload: { sysId, type, step } }) {
      const lastValue = +state.systemDatas[sysId].tank.alarms[type].value;
      state.systemDatas[sysId].tank.alarms[type].value = (
        +lastValue + step
      ).toFixed(2);
    },

    decAlarm(state, { payload: { sysId, type, step } }) {
      const lastValue = +state.systemDatas[sysId].tank.alarms[type].value;
      if (lastValue - step >= 0) {
        state.systemDatas[sysId].tank.alarms[type].value = (
          +lastValue - step
        ).toFixed(2);
      }
    },
  },
});

export const dataActions = data.actions;
export const dataReducer = data.reducer;
