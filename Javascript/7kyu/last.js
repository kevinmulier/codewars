function last(...args) {
  if (args.length > 1) {
    return args[args.length - 1];
  }

  const singleArg = args[0];

  if (Array.isArray(singleArg)) {
    return singleArg[singleArg.length - 1];
  }

  if (typeof singleArg === 'string') {
    return singleArg[singleArg.length - 1];
  }

  return singleArg;
}
