let day1 = new Date('January 27, 2017');
let day2 = new Date('November 8, 2020');
let day3 = new Date('March 30, 1945');
let day4 = new Date('February 14, 2022');
let day5 = new Date('June 3, 1752');
let day6 = new Date('August 12, 1865');

function getDays (firstDate, secondDate){
    const dayTime = 24 * 60 * 60 * 1000;
    const daysBetween = Math.abs(secondDate - firstDate);
    return Math.ceil(daysBetween / dayTime);
};

console.log(getDays(day1, day2));
console.log(getDays(day3, day4));
console.log(getDays(day2, day4));
console.log(getDays(day5, day6));