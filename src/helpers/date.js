export const formatDate = (date) => {
  return new Date(date).toISOString().slice(0, 10);
};

export const nextDay = (date) => {
  return date.setDate(date.getDate() + 1);
};

export const dayNameENG = (date, version) => {
  return new Date(date).toLocaleString('en-EN', { weekday: version });
};

export const hoursAndMinutes = (length) => {
  const hours = Math.floor(length / 60);
  const minutes = `0${length % 60}`.slice(-2);
  return `${hours}h ${minutes}min`;
};
