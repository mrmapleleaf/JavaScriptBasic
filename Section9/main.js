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
//プロトタイプまで取得してしまう
for (const key in obj1) {
  console.log(key);
}
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(Object.getOwnPropertyNames(obj1));

//for-ofでオブジェクトのプロパティを取得する方法がベター
for (const key of Object.keys(obj1)) {
  console.log(key);
}

//ファクトリ関数でクラスを量産
const userPrototype = {
  greeting() {
    return `Hi! This is ${this.name}. I am ${this.age} old.`;
  },
};
const Userfactory = (name, age) => {
  //先にgreeting関数をオブジェクト生成と一緒にプロトタイプに追加する
  const user = Object.create(userPrototype);
  user.name = name;
  user.age = age;
  return user;
};
const user1 = Userfactory('kaede', 26);
const user2 = Userfactory('kaedemaru', 20);
console.log(user1);
console.log(user2);

//コンストラクタ関数
//newをつけるとthisが暗黙的に作成され、リターンされる
const UserConstructor = function (name, age) {
  //this = {}
  console.log(new.target);
  this.name = name;
  this.age = age;
  //this.greeting = function () {};
  //return this;
};

//プロトタイプにgreetingプロパティを後から追加する
UserConstructor.prototype.greeting = function () {
  return `Hi! This is ${this.name}. I am ${this.age} old.`;
};

const user3 = new UserConstructor('kaede', 26);
const user4 = new UserConstructor('kaedemaru', 30);

// console.log(user3);
// console.log(user4);

//空のオブジェクトを作れるデフォルトのコンストラクタ関数
let o = new Object({
  hi: 'hi',
});
console.log(o);
//配列を作れるデフォルトのコンストラクタ関数
const a = new Array('apple', 'banana');
//関数を作れるデフォルトのコンストラクタ関数
const b = new Function('a', 'b', 'c', 'return a + b + c');
console.log(a);
console.log(b(100, 200, 300));

o = {
  hello: 'hello',
};
console.log(o.hasOwnProperty('hello'));
console.log('hello' in o);
console.log(o.hasOwnProperty('hi'));

//内部的には関数扱い
//省略記法のメソッドのみ記載できる
//→フィールド（プロパティ的なもの）を宣言できるようになった
//プロパティを設定したい場合はconstructor関数のなかでthisを使って設定する
class User {
  id = 120;
  #age = 26;
  constructor(name, age) {
    this.name = name;
  }
  birthDay = '1996/12/25';
  get greeting() {}
  set post(newValue) {}
}
console.log(new User('ojisan', 100));
const user = new User();

// //クラスの継承 extends
// class Animal {
//   age = 0;
//   constructor(age) {
//     this.age = age;
//   }
//   eat() {
//     console.log('eat from animal');
//   }
// }

// class Bird extends Animal {
//   name = 'pi';
//   constructor(age) {
//     super(age);
//   }
//   fly() {}
//   eat() {
//     //親クラスのメソッドを呼びだすsuper.
//     super.eat();
//     console.log('eat from bird');
//   }
// }
// console.log(new Bird(100));
// const b1 = new Bird(200);
// b1.eat();

// const animalObject = {
//   age: 0,
//   eat() {
//     console.log('eat from animalObj');
//   },
// };

const birdObject = {
  age: 1,
  eat() {
    console.log('eat from birdObj');
  },
};

//extendsを使わずに継承を実現する
class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {
    console.log('eat from animal');
  }
}

class Bird {
  name = 'bird';
  constructor(age, name) {
    this.animal = new Animal(age);
    this.name = name;
  }
  fly() {}
  eat() {
    this.animal.eat();
    console.log('eat from bird');
  }
}
console.log(new Bird(100, 'pi'));
const b1 = new Bird(200, 'pu');
b1.eat();
