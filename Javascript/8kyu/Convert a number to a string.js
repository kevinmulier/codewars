// // Explanation of the different ways

// I think there’s absolutely no need to depend on such micro-benchmarks. The real bottlenecks are somewhere else. However, each of these conversion methods has its own caveats:

// v.toString() — works well, unless v.toString is not a function, that is when v is null or undefined or when .toString was deliberately changed or deleted (very rare case)
// '' + v — works with nulls and undefineds too, but might give some unexpected results for such objects as:
// v = {
// valueOf: function () { return 5 },
// toString: function () { return 'foo' }
// }
// in which case '' + v would return '5' (very rare case)
// String(v) — works every time, correctly calls .toString method, if an object has one, and works for nulls and undefineds
// '' + [v] or [v].join() — same as String(v) (unless you modified Array.prototype), with exception of nulls and undefineds becoming empty strings, which can be quite usefull sometimes
// In the real world, it’s fine to use any of these methods, with caution while using v.toString() when v could be null and undefined. Choose, what’s most convenient/legible/usefull for you and your team. Performance differences are highly negligible.
