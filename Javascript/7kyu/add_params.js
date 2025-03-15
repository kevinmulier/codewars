function add(...args) {
  return args.reduce((sum, num, index) => sum + num * (index + 1), 0);
}