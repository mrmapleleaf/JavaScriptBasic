'use strict';

let generatePerson = () => {
  let age = 0;
  let name = 'kaede';
  return {
    //age: 0,
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      return (age += 1);
    },
  };
};

const kaede = generatePerson();
console.log(kaede.getName());
console.log(kaede.getAge());
console.log(kaede.incrementAge());

let createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

let countNum = createCounter();
console.log(countNum());

//即時実行関数(IIFE)
//名前付き関数式、無名関数式でも使える
const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
})();
console.log(counter());

(function () {
  var hello = 'hello';
})();

//再帰関数
//階乗の関数
//0! = 1
let factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));
//三項演算子を使ったパターン
let factorial1 = function func(n) {
  return n === 0 ? 1 : n * func(n - 1);
};
console.log(factorial1(5));
