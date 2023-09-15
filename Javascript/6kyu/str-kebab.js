function kebabize(str) {
  return str
    .replace(/[^a-zA-Z]/g, "")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters
