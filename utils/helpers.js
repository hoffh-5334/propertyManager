// Middleware: formats the date as MM/DD/YYYY
module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },

// Text length restriction
  text_length_restrict: (str) => {
    if (str.length > 175)
    return str.substring(0,175) + '...';
  return str;
  }
};

