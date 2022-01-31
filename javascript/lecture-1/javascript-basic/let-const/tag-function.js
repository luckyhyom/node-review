const setDecimalSeperators = function (strs, ...args) {
  return args.reduce(function (p, c, i) {
    return p + strs[i] + (c + '').replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
  }, '') + strs[strs.length - 1]
}
const res = setDecimalSeperators `이 사과는 하나에 ${2000}원이고, 총 ${1234567}개를 구입하시면 총 ${2000 * 1234567}원 이에요.`
console.log(res);

// 정해진 템플릿에 적용하기 좋을 것 같다.