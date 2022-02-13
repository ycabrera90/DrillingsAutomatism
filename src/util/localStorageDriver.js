import { VAR_PROJECT_ID } from "../util/globalVars";

const localStorageDrive = {
  getValue(key) {
    return JSON.parse(localStorage.getItem(`${VAR_PROJECT_ID}__${key}`));
  },

  setValue(key, value = null) {
    localStorage.setItem(`${VAR_PROJECT_ID}__${key}`, JSON.stringify(value));
  },

  delValue(key) {
    localStorage.removeItem(`${VAR_PROJECT_ID}__${key}`);
  },
};

export default localStorageDrive;
