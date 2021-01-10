import DateFormats from './DateFormats';

/**
 * Date → string.
 * 
 * @param {Date} date
 * @param {DateFormats} format 
 * @returns {string} result
 */
export default (date: Date, format: DateFormats = DateFormats.YYYY_MM_DD): string => {
  if (!date) {
    return '';
  }

  let fmt = format.toString();
  fmt = fmt.replace(/yyyy/g, date.getFullYear().toString());
  fmt = fmt.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  fmt = fmt.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  fmt = fmt.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  fmt = fmt.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  fmt = fmt.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  fmt = fmt.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return fmt;
}
