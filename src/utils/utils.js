export const handleGetValueLocalStore = key => {
  const localString = localStorage.getItem(key);
  return localString ? JSON.parse(localString) : null;
};

export const handleSetValueLocalStore = (key, data) => {
  const dataString = JSON.stringify(data);
  localStorage.setItem(key, dataString);
};
