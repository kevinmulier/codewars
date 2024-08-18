function pofi(n) {
  const mod = n % 4;
  if (mod === 0) return '1';
  if (mod === 1) return 'i';
  if (mod === 2) return '-1';
  if (mod === 3) return '-i';
}
