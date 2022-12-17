//関数はオブジェクト
//関数宣言文
function add(a, b) {
  return a + b;
}

console.log(add);
console.dir(add);

//変数に関数を入れて、新しい関数名で関数を作れる
const newAdd = add;
console.log(newAdd(5, 7));

//関数式（名前付き関数式）
let sayHi = function hi() {
  return 'hi';
};
//関数式の変数名は省略できる（無名関数）
sayHi = function (name) {
  return 'hi ' + name;
};

console.log(sayHi('kaede'));

//関数式はconstが使える＝関数の上書きを防げる。
const substract = function (num1, num2) {
  return num1 - num2;
};
console.log(substract(10, 5));

//「関数」と「メソッド」は違う
const person = {
  name: 'kaede',
  //オブジェクト内に宣言された関数が「メソッド」
  sayMyName: function () {
    //thisを使ってそのオブジェクト内のフィールドにアクセスする
    return 'hello. My name is ' + this.name;
  },
};
console.log(person.sayMyName());

//アロー関数（無名関数の置き換え）
let greet = (name) => {
  return `hello ${name}`;
};
console.log(greet('kaede'));
//1つの式をリターンするだけの処理の場合、returnと{}を省略できる
greet = (name) => `こんにちは ${name}`;
console.log(greet('kaede'));

//パラメータが１つだけの場合、()を省略できる。
greet = (name) => {
  return `${name}さんこんにちは`;
};
console.log(greet('kaede'));

//オブジェクトをアロー演算子で返したい時
greet = (name) => ({
  name: name,
});
console.log(greet('kaede').name);

//デフォルトパラメータ
let greet2 = (name = 'user') => `hello ${name}`;
console.log(greet2('kaedechan', 'love you'));
//何も渡さないか「undifined」を渡す時にデフォルトパラメータが使われる
console.log(greet2());
console.log(greet2(undefined));

greet2 = (name = 'user', message = 'I hate you') => `hello ${name}. ${message}`;
console.log(greet2('kaede'));
console.log(greet2('kaede', 'I love you'));
console.log(greet2());

greet2 = (name = 'name', message = `${name}`) =>
  console.log(`${name}, ${message}`);
greet2('kaede');

//レストパラメータで無限にパラメータを扱う
let sum = (...a) => {
  let total = 0;
  for (num of a) {
    total += num;
  }
  return total;
};
console.log(sum(10, 20, 30));

//昔の無限引数の取り方（アロー関数では使えない）
sum = function () {
  let total = 0;
  for (num of arguments) {
    total += num;
  }
  return total;
};
console.log(sum(10, 20, 300));

//コールバック関数（関数の引数に関数を入れる）
let subtract = (a, b, callback) => {
  //パラメータの内容は変更できる。がしないようにするのが基本。
  a = 300;

  let result = a - b;
  callback(result);
};

subtract(10, 3, (result) => {
  console.log(result);
});

// subtract(10, 3, function showResult(result) {
//   console.log(choco);
//   console.log(result);
// });

// subtract(10, 3, (result) => {
//   alert(result);
// });
