const obj = {
  a:1,
  b:2
}

for (const key in obj) {
  console.log(key);
}

const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  const prop = obj[keys[i]]
  console.log(prop);
}

{
  const a = 1;
  console.log(a);
}
{
  const a = 2;
  console.log(a);
}
