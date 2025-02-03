Calculator.average = function (...args) {
  if (args.length === 0) return 0;
  return args.reduce((sum, value) => sum + value, 0) / args.length;
};
