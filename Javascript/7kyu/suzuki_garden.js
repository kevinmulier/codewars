const rakeGarden = (garden) =>
  garden
    .split(' ')
    .map((e) => (e !== 'rock' ? 'gravel' : e))
    .join(' ');
