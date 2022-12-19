const interests = 'interests';
const person = {
  name: 'kaede',
  age: 30,
  greeting: function func01() {
    console.log(this.name);
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
