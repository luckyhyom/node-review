function abc(v) {
  return v.replace(/ /gi,'');
}

const obj = {
  [``]: 1,
  [`;;`]: 2,
  [1+2+''+abc('asdm   ksamdk    sdmkls          ')+'  ABCD '.replace(/ /gi,'')]: 3
}
console.log(obj);