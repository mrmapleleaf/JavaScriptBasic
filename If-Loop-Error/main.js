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

//演算子の優先順位 MDNに乗っている
let x = 15;
let flg2 = x > 1 && x < 20;
if (flg2) {
  console.log('ok');
} else {
  console.log('ok');
}
flg2 = x === 10 || (x > 12 && userName);
console.log(userName);

if (flg2) {
  console.log('ok');
} else {
  console.log('no');
}

//Null合体演算子
let username = '' ?? 'User';
console.log(username);

let flg3 = 'true';
console.log(flg3);
flg3 = !'true';
console.log(flg3);
//「!!」を付けて値の型をboolean型に変更する
flg3 = !!'true';
console.log(flg3);

//空文
//「;」のみの文（prettierでは削除される）

//ブロック文
{
  const greeting = 'hello';
}

// 三項演算子
let num = 10;
let num1 = num > 5 ? 'bt 5' : 'le 5';
console.log(num1);

//switch文

function vegetableColor(vegetable) {
  // if (vegetable === 'tomato') {
  //   console.log('tomato is red');
  // } else if (vegetable === 'pumpkin') {
  //   console.log('tomato is orange');
  // } else if (vegetable === 'onion') {
  //   console.log('tomato is white');
  // }

  //同じ定数を各ケースで使いたい場合は、各ケースをブロック化もできる。
  switch (vegetable) {
    case 'tomato': {
      const message = `${vegetable} is red`;
      console.log(message);
      break;
    }
    case 'pumpkin':
    case 'carrot': {
      console.log(`${vegetable} is orange`);
      break;
    }
    default: {
      console.log(`${vegetable} is not found`);
      break;
    }
    case 'onion': {
      console.log(`${vegetable} is white`);
      break;
    }
  }
}

vegetableColor('tomato');
