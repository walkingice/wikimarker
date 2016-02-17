/* Given a date object then return string for creating Wikipedia API */
export function parseDate (dateObj) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  dateObj = (dateObj instanceof Date) ? dateObj : new Date();

  let m = months[dateObj.getUTCMonth()];
  let d = dateObj.getUTCDate();
  return `${m}_${d}`;
}

/* links is an array of strings. pick 10 random strings from it. */
export function randomPick(links, limit = 10) {

  // only accept alphabet and white-space
  let exp = /^[a-zA-Z\s]+$/;

  let ls = links.filter((val) => exp.test(val));

  let output = [];
  while(ls.length !== 0 && output.length < limit) {
    let idx = Math.floor(Math.random() * ls.length);
    output.push(ls.splice(idx, 1).shift());
  }

  return output;
}
