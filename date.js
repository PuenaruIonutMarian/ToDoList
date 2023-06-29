exports.getDate = function () {
    // Get the current date and format it
    const date = new Date();
    const options = {
        weekday: 'long', // Specify the weekday to be displayed in letters
        day: 'numeric', // Specify the day of the month to be displayed as numbers
        month: 'long' // Specify the month to be displayed in letters
    };
    return date.toLocaleString('en-US', options); // Format the date based on the options and return it
};

exports.getDay = function () {
    const date = new Date();
    const options = {
        day: 'numeric' // Specify the day of the month to be displayed as numbers
    };
    return date.toLocaleString('en-US', options); // Format the date based on the options and return it
};

exports.getYear = function () {
    let date = new Date();
    let options = {
        year: 'numeric' // Specify the year to be displayed as numbers
    };
    return date.toLocaleString('en-US', options); // Format the date based on the options and return it
};