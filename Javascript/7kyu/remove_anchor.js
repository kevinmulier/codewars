// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// Solution

const removeUrlAnchor = (url) => (url.split("").indexOf("#") !== -1 ? url.split("").slice(0, url.indexOf("#")).join("") : url);

// Better solution

const removeUrlAnchor = (url) => url.split("#")[0];
