const interests = 'interests';
const person = {
  name: 'kaede',
  age: 30,
  greeting: function func01() {
    return this.name;
  },
  //予約語をキーに使える
  const: 'const',
  //文字列をキーにできる
  'current city': 'tokyo',
  //数値もキーにできる
  3: 3,
  //式をキーにできる
  //変数を使って、キーを動的にしている
  [interests]: ['music', 'dance'],
};

//オブジェクトへの[]を使ったアクセスの方法
console.log(person['current city']);
console.log(person[3]);
console.log(person[interests]);

//普通のキーにアクセスしようとするとエラーになる
//console.log(person[age]);
//キーを文字列にすればアクセスできる
console.log(person['age']);
console.log(person['greeting']());

//オブジェクトのキーはすべて文字列Stringで管理されている
for (key in person) {
  console.log(key);
}

//オブジェクトのキーを取得する方法、値を配列で取得
console.log(Object.keys(person));
//for-ofを使って値を取得
for (key of Object.keys(person)) {
  console.log(key);
}

//オブジェクトの値を取得する方法、値を配列で取得
console.log(Object.values(person));

//キーとバリューを配列に格納した配列を返す。２重配列。
console.log(Object.entries(person));

person.gender = 'man';
console.log(Object.keys(person));
//オブジェクトのプロパティを削除する
delete person.gender;
console.log(Object.keys(person));
person.gender = 'female';
console.log(Object.keys(person));
delete person['gender'];
console.log(Object.keys(person));

//オブジェクトの省略記法、よく使う
const name1 = 'Espresso';
const size = 350;

const coffee = {
  name1,
  size,
};
console.log(coffee);

//キーとプロパティが同じな、異なるアドレスのオブジェクトを作る
//スプレッド構文
const coffee2 = { ...coffee };
console.log(coffee === coffee2);

//新しいオブジェクトにプロパティの追加もできる
const coffee3 = {
  ...coffee,
  color: 'brown',
  isHot: true,
  name: 'latte',
};
console.log(coffee3);

const juice = {
  ingredient: 'carrot',
  nutritions: {
    calories: 5,
    sugars: 0,
  },
};

const juice2 = { ...juice };
juice2.ingredient = 'celorie';
console.log(juice.ingredient);
//オブジェクト内に定義されたオブジェクトのコピーは浅いコピーになり、オブジェクトは共有される（シャロウコピー）
juice2.nutritions.calories = 10000;
console.log(juice.nutritions.calories);

//オブジェクトの拡張
//既存のオブジェクトに既存のオブジェクトのプロパティを格納させる
const obj1 = { a: 1 };
const obj2 = { b: 2 };
//obj1の中身が変更される
Object.assign(obj1, obj2);
const newObj = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj1 === newObj);

//分割代入
