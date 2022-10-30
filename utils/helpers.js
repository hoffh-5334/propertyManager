// Middleware: formats the date as MM/DD/YYYY
module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  }
};