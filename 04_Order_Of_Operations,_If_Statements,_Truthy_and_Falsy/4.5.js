const isLeapYear = (year) => {
    let leapYear = false;
    if (year % 4 === 0 && year % 100 !== 0) {
        leapYear = true
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        leapYear = true;
    }
    if (leapYear === true) {
        return "It is indeed a leap year."
    }
    else {
        return "This is not a leap year."
    }
}
