function nullish(v) {
  const value = v ?? 'default';
  console.log(value);
  return value;
}

function or(v) {
  const value = v || 'default';
  console.log(value);
  return value;
}
// returns ''
nullish('');
// returns 'default'
or('');