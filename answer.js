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
function getDayType(dayParam) {
  const day = dayParam.toLowerCase();
  switch (day) {
    case "friday":
    case "saturday":
      return `Weekend`;
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return `Working Day`;
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

function validateUsername(userNameParam) {
  const userName = userNameParam.toLowerCase();
  if (userName.includes(" ")) {
    return `No Space Allowed`;
  } else if (userName.length < 4) {
    return `Too Short`;
  } else if (userName.includes("admin")) {
    return `Reserved Word`;
  } else {
    return `Available`;
  }
}

/*
Check purpose----
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
*/

/**
 * Question 4: Dhaka CNG Fare Meter · 15 marks
Write a function getCngFare(distance, isNight, waitingMinutes) that returns the total fare in taka.

Fare rules:

The minimum fare is 50 taka, and it covers the first 2 km.
Every km after the first 2 km costs 15 taka.
Waiting charge: 2 taka for every waiting minute.
At night, the driver adds 20% on the whole fare — that means on the distance charge and the waiting charge together.
isNight should default to false and waitingMinutes should default to 0, so getCngFare(5) must work on its own.
 * 
 */

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  const minimumFare = 50;
  const minimumDistance = 2;
  const perKmFare = 15;
  const waitingFareForPerMinute = 2;

  let fare =
    distance <= minimumDistance
      ? minimumFare
      : minimumFare + (distance - minimumDistance) * perKmFare;

  fare = fare + waitingMinutes * waitingFareForPerMinute;
  if (isNight) {
    fare = fare + fare * 0.2;
  }

  return fare;
}

/**
 * For checking purpose
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));
 */

// Question 5. Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase.

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) {
    return `Won`;
  } else if (ballsLeft <= 0) {
    return `Lost`;
  } else {
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${
      requiredRate <= 6
        ? "Comfortable"
        : requiredRate <= 12
          ? "Tough"
          : "Almost Impossible"
    }`;
  }
};

/**
 * For checking purpose
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
 */
