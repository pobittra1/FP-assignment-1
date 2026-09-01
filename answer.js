// Question 1. Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space.

function describeValue(value) {
return `${typeof value} | ${Boolean(value) ? "truthy" : "falsy"}`;
}

// console.log(describeValue(""));
// console.log(Boolean("shr"));
// console.log(Boolean(""));

