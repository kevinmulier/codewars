const explode = (x) =>
  typeof x[0] === "number" || typeof x[1] === "number" ? Array((typeof x[0] === "number" ? x[0] : 0) + (typeof x[1] === "number" ? x[1] : 0)).fill(x) : "Void!";
