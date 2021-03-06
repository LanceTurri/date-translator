const dateStrings = require('../core/dateStrings');

module.exports = (year) => {
    let decade = null;

    if (year.length === 4) {
        decade = parseInt(year.slice(2), 10);
    } else {
        decade = parseInt(year.slice(1), 10);
    }

    if (decade === 0) {
        // 1900
        return '';
    } else if (decade < 20) {
        // 2019
        return `${dateStrings.ones[decade]}`;
    }

    // 29 / 10 => parseInt(2.9) => 2
    const tensDigit = parseInt(decade / 10, 10);
    const onesDigit = decade % 10;

    return `${dateStrings.tens[tensDigit]} ${dateStrings.ones[onesDigit]}`;
};
