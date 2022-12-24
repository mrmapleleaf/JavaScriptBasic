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
const book = {
  title: 'JavaScript course',
  price: 9.99,
  author: {
    firstName: 'kaede',
    lastName: 'marumaru',
  },
  isbn: 1234567,
  description: 'ooooooooi',
};
//普通のタイトルの取得
//const title = book.title;
//分割代入時のタイトル取得やその他
const {
  title: bookTitle,
  price,
  author: { firstName, lastName },
  publisher = 'kaede inc',
  //本体のbookにあって、こっちにないやつ全てを「...etc」オブジェクトとして取得できる
  ...etc
} = book;
console.log(bookTitle);
console.log(price);
console.log(firstName);

const sayIsbn = ({
  title: bookTitle,
  price,
  author: { firstName, lastName },
  publisher = 'kaede inc',
  ...etc
}) => {
  console.log(etc.isbn);
};

sayIsbn(book);

//in演算子
//オブジェクトの中に特定のプロパティがあるかどうかをブーリアン型で返す
console.log('title' in book);
book.title = undefined;
if (book.title !== undefined) {
  console.log('urriiiiiiii');
} else if ('title' in book) {
  console.log('mudamudamuda');
} else {
  console.log('oraoraora');
}

//オプショナルチェイニング「?.」
//「.」の前のプロパティがnullかundefinedの場合は、後ろの指揮は評価せずに「undefined」にする
let kaede = {
  name: undefined,
};

kaede = undefined;
//オプショナルチェイニングしないと、プロパティ指定時にエラーになる。
console.log(kaede?.name);

//「this」はグローバルオブジェクト
let sayThis = function () {
  console.log(this);
};

sayThis();

const car = {
  color: 'red',
  //このメソッド内のthisは「car」オブジェクトを指す
  sayThis,
};
car.sayThis();

//アロー関数で「this」を使うとどうなるのか
//アロー関数は「this」を持たない

//コールバック関数(おさらい)
function func1(a, func2) {
  let result = a + 100;
  func2(result);
}

function func2(result) {
  console.log(`計算結果は${result}です`);
}
func1(100, func2);

let logging = (cb) => {
  console.log(cb());
};

//thisがundefinedになる
//loggingの引数をアロー関数にすれば、thisが使える
const car2 = {
  color: 'red',
  changeColor: function (color) {
    this.color = color;
    logging(() => {
      return this.color;
    });
  },
  sayThis,
};
car2.changeColor('black');

sayThis = function (a, b) {
  //このthisがどのオブジェクトを示すかを明示的に指定できる
  console.log(this, a, b);
};

//callメソッドを使う
sayThis.call({ hello: 'hello' }, 1, 2);
//applyメソッドを使う
sayThis.apply({ hello: 'hello' }, [1, 2]);

//bindメソッドでthisが明示的に指定された新しい関数を作り出す
let sayThis2 = sayThis.bind({ hello: 'good evening' }, 1, 2);
sayThis2();

//メソッドをfunctionをつけたままの省略記法
const a = {
  name: 'kaede',
  //「funciton」「:」を取る（バリューだけで宣言する）
  greeting() {
    console.log('my name is ' + this.name);
  },
};
a.greeting();

//getterの使い方
const pastaCalculator = {
  servingSize: 60,
  member: 4,
  get total() {
    return this.servingSize * this.member;
  },
};
//totalの()を外しても、メソッドが呼び出しできる
console.log(pastaCalculator.total);
