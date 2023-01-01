let arrayLikeObj = {
  0: 'apple',
  1: 'banana',
  length: 2,
};
let fruits = ['apple', 'banana'];
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(arrayLikeObj));

fruits[2] = 'grape';
//疎の配列になる
fruits[10] = 'orange';
console.log(fruits);

//疎の配列を意図的に作る
fruits = ['apple', , 'banana', , , 'grape', ,];
console.log(fruits);

fruits = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
];

fruits = new Array(1, 2, 3);
fruits = new Array('apple', 'banana');
fruits = Array('hello');

fruits = ['apple', 'banana', 'grape'];
//スプレッド構文を使って新しい参照の配列を作成する
const newFruits = ['peach', ...fruits];
fruits.push('orange');
console.log(newFruits, fruits);

let sum = (...nums) => {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result;
};
let sums = [1, 2, 3, 4];
//スプレッド構文で配列展開
console.log(sum(...sums));

//オブジェクトの分割代入
let userObject = { hobbies: ['music', 'travel'] };
let {
  hobbies: [, travelObject],
} = userObject;
console.log(travelObject);
//配列の分割代入はこうなっている
const yoshipi = [
  'yoshipi',
  20,
  'man',
  ['music', 'travel'],
  { first: 'kaede', last: 'maruyama' },
  'tokyo',
  'hello',
];
let [
  ,
  ,
  gender = 'woman',
  [music, travel],
  { first, last },
  //email = 'test@email.com',
  //「...変数名」で配列で残りの要素を受け取る
  ...rest
] = yoshipi;
console.log(gender);
console.log(travel);
console.log(last);
console.log(rest);

//分割代入できる
let myname;
[myname] = yoshipi;
console.log(myname);
//オブジェクトに新たなプロパティを追加しながら、プロパティに分割代入
let user = {};
[user.name] = yoshipi;
console.log(user);

//for-ofの値を受ける側に配列を渡して、中身の値を直接いじる
//Object.entries() キーとバリューを配列の配列で取得する
let userObj = { name: 'kaede', age: 26 };
for (const [key, value] of Object.entries(userObj)) {
  console.log(key, value);
}

let items = [0, 1, 2];
items.push(3, 4);
items.unshift(-1);
items.shift();
console.log(items);
console.log(items.pop());
console.log(items);

//配列を変更する4つのメソッドは配列のようなオブジェクトにも使える
let arraylikeObject = {
  0: 0,
  1: 1,
  2: 2,
  length: 3,
};
//Array.prototype.push.call(arraylikeObject, 3);
console.log(arraylikeObject);

//配列っぽいオブジェクトから配列を作る
const realArray = Array.from(arraylikeObject);
