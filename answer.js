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




/*
Question 3. Write a function validateUsername that takes a username and checks it against these rules, in this order:
Shorter than 4 characters → return "Too Short"
Contains a space → return "No Space Allowed"
Contains the word admin anywhere, in any letter case → return "Reserved Word"
Otherwise → return "Available"
*/

function validateUsername(userNameParam){
const userName = userNameParam.toLowerCase();
    if(userName.includes(" ")){
        return `No Space Allowed`;
    }
    else if(userName.length < 4){
        return `Too Short`;
    }
    else if(userName.includes("admin")){
        return `Reserved Word`;
    }
    else{
        return `Available`;
    }
}

/*
Check purpose----
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
*/