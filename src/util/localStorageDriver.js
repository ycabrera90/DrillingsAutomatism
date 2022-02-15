const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;

const localStorageDrive = {
  getValue(key) {
    return JSON.parse(localStorage.getItem(`${PROJECT_ID}__${key}`));
  },

  setValue(key, value = null) {
    localStorage.setItem(`${PROJECT_ID}__${key}`, JSON.stringify(value));
  },

  delValue(key) {
    localStorage.removeItem(`${PROJECT_ID}__${key}`);
  },
};

export default localStorageDrive;
