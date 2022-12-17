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
