//ストリクトモードに適応
//'use strict';
//グローバルオブジェクトを見る
console.log(globalThis);

//昔の変数宣言
var hello = 'hello';
console.log(hello);

function func1() {
  //このfunc1のみがストリクトモードになる
  'use strict';
  console.log('hello');
}

// grape = 'grape';
// console.log(globalThis);

const coffee = {
  name: 'coffee latte',
};

const coffee2 = coffee;
console.log(coffee === coffee2);

//coffeeはconstで定義しているのに中身の値を変更できる
coffee.name = 'espresso';
console.log(coffee2.name);
