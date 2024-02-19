let abc = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 25];
abc = abc.sort(function (m, n) {
  return m - n;
});
let bcd = [];
let vb = [];
for (i = 0; i < abc.length; i++) {
  vb.length > 1 ? bcd.push(vb) : (bcd = bcd.concat(vb));
  vb = [];

  for (j = i; j < abc.length; j++) {
    if (
      matching == true ||
      (abc[i] !== abc[j] && matching == false && j != i)
    ) {
      break;
    } else if (abc[i] === abc[j] && matching == false) {
      vb.push(abc[i]);
    }
  }
}
vb.length > 1 ? bcd.push(vb) : (bcd = bcd.concat(vb));
function callMethodCheck(bcd, a) {
  let count1 = 0;
  bcd = bcd.flat();
  for (k in bcd) {
    if (a == bcd[k]) {
      count1++;
    }
  }
  if (count1 > 0) {
    return true;
  } else {
    return false;
  }
}
