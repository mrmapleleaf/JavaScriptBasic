let flg = false;
let maybeOk = false;
if (flg) {
  console.log('OK');
} else if (!maybeOk) {
  console.log('maybe ok');
} else {
  console.log('not ok');
}

//===演算子（同値）
flg = 1 === 1;
console.log(flg);

flg = 1 !== 2;
console.log(flg);

//==演算子（等値）
flg = 1 == 1;
console.log(flg);

flg = 1 != 2;
console.log(flg);

flg = 1 == '1';
console.log(flg);

let coffee1 = {
  name: 'cafe latte',
};

let coffee2 = {
  name: 'cafe latte',
};

console.log(coffee1 === coffee2);

const coffee3 = coffee2;
console.log(coffee2 === coffee3);

const ar1 = ['apple', 'banana'];
const ar2 = ['apple', 'banana'];
console.log(ar1 === ar2);
const ar3 = ar1;
console.log(ar3 === ar1);

let ok = 1 > 0;
console.log(ok);
//辞書順（ユニコード値で比較）
ok = 'a' > 'b';
console.log(ok);

let flg1 = 100;
if (flg1) {
  console.log('true');
} else {
  console.log('false');
}

flg = true && false;
console.log(flg);

flg = true || false;
console.log(flg);

flg = 'hello' && 'hi';
console.log(flg);

const userInput = '';
const userName = userInput || 'maruyama kaede';
console.log(userName);
