// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

// Series
// The deaf rats of Hamelin (2D)

var countDeafRats = function (town) {
  const rats = town.split("P").map((el) => el.split(" ").join(""));
  let deafRats = 0;
  for (let i = 0; i < rats[0].length; i = i + 2) {
    if ("" + rats[0][i] + rats[0][i + 1] === "O~") {
      deafRats++;
    }
  }
  for (let i = 0; i < rats[1].length; i = i + 2) {
    if ("" + rats[1][i] + rats[1][i + 1] === "~O") {
      deafRats++;
    }
  }
  return deafRats;
};
