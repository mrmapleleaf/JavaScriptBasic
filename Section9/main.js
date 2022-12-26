const obj = {
  a: 1,
  b: 2,
};

console.log(obj);
//プロトタイプの取得
console.log(Object.getPrototypeOf(obj));
//プロトタイプの設定
Object.setPrototypeOf(obj, { c: 100 });
console.log(Object.getPrototypeOf(obj));

//プロトタイプの設定とオブジェクト作成を同時に行う
const obj1 = Object.create({ c: 3 });
obj1.a = 1;
obj1.b = 20;
console.log(obj1);
