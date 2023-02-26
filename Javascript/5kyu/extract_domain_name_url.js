// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  if (url.startsWith("http")) {
    url = url.split("//")[1];
  } else if (url.startsWith("www")) {
    return (url = url.split(".")[1]);
  }
  if (url.startsWith("www")) {
    return url.split(".")[1];
  }
  return url.split(".")[0];
}
