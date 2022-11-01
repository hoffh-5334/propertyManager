// Middleware: formats the date as MM/DD/YYYY
module.exports = {
  format_date: (date) => {
    if (date) {
      return date.toLocaleDateString();
    }
    return;
  },
  // Text length restriction
  text_length_restrict: (str) => {
    if (str.length > 175)
      return str.substring(0, 175) + '...';
    return str;
  },
  setPriorityColor: (priority) => {
    console.log(priority)
    if (priority === "high") {
      return "danger"
    } else if (priority === "medium") {
      return "warning"
    } else if (priority === "low") {
      return "secondary"
    } else {
      return "light"
    }
  },
};

