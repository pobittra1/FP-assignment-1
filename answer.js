// Question 1. Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space.

function describeValue(value) {
return `${typeof value} | ${Boolean(value) ? "truthy" : "falsy"}`;
}

// console.log(describeValue(""));
// console.log(Boolean("shr"));
// console.log(Boolean(""));



/* Question 2. Write a function getDayType that takes a day name and returns:
Friday, Saturday =	"Weekend"
Sunday, Monday, Tuesday, Wednesday, Thursday =	"Working Day"
anything else =	"Invalid Day"
*/
function getDayType(dayParam){
    const day = dayParam.toLowerCase();
    switch(day){
        case "friday":
        case "saturday":
            return `Weekend`;
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return `Working Day`
        default:
            return `Invalid Day`;
    }
}

// for check purpose
// console.log(getDayType("sundayd"));
