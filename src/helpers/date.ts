export const formatDate = (date: Date): string => {
  return new Date(date).toISOString().slice(0, 10);
};

export const nextDay = (date: Date): Date => {
  return new Date(date.setDate(date.getDate() + 1));
};

export const dayNameENG = (
  date: Date,
  version: 'long' | 'short' | 'narrow'
): string => {
  return date.toLocaleString('en-EN', { weekday: version });
};

export const hoursAndMinutes = (length: number): string => {
  const hours = Math.floor(length / 60);
  const minutes = `0${length % 60}`.slice(-2);
  return `${hours}h ${minutes}min`;
};
