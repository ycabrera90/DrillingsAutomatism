import { VAR_PROJECT_ID } from "../util/globalVars";

const localStorageDrive = {
  setValue(key, value = null) {
    localStorage.setItem(`${VAR_PROJECT_ID}__${key}`, JSON.stringify(value));
  },

  delValue(key) {
    localStorage.setItem(`${VAR_PROJECT_ID}__${key}`);
  },
};

export default localStorageDrive;
