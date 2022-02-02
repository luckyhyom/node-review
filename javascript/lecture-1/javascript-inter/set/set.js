/**
 * 중복 제거
 * 순서 보장
 * 전체 순회
 * 값의 유무 판단
 */

const arr = [1,2,3,4,5];

const bad = arr.includes(6); // full scan
const good = new Set(arr).has(6); // hash
