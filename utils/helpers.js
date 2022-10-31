// Middleware: formats the date as MM/DD/YYYY
module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
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