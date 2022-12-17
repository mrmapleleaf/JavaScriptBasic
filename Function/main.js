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
