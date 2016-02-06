/* Given a date object then return string for creating Wikipedia API */
export function parseDate (dateObj) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  dateObj = (dateObj instanceof Date) ? dateObj : new Date();

  let m = months[dateObj.getUTCMonth()];
  let d = dateObj.getUTCDate();
  return `${m}_${d}`;
}
