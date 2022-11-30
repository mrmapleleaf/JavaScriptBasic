let count = 0;
console.log(count);
count = 30;
console.log(count);
const daysInweek = 7;
console.log(2 + 5);
let result =+ 1;
console.log(result);
console.log(result++);
++result;

// データ型
//number型
let number = 10;
number = 32.33;
//string型
let string = 'Hello';
//変数
number = 'hello';

//string型について
const userName = "hello";
const userName2= `yoshipi`;
string = 'kaede' + userName;
//``に$`{変数名}で``の中にjavascriptを埋め込む事ができる
string = `Hello ${userName}`;
console.log(string);
console.log("``");
console.log('"``"');
console.log("\\");
//改行
console.log("hello \n kaede");
const name1= `hello 
world`;
console.log(name1);

//キャスト（数値変換）
let calcResult;
let userInput = '10.9';
calcResult = Number(userInput) + 10;
console.log(calcResult);
//Number関数だけは整数に変換される。小数点切り捨て
calcResult = parseInt(userInput) + 10;
console.log(calcResult);
calcResult = parseFloat(userInput) + 10;
console.log(calcResult);
calcResult = +userInput + 10;
console.log(calcResult);

//キャスト（文字列）
const num1 = 10;
let stNum;
stNum = String(num1);
console.log(stNum);
stNum = num1.toString();
console.log(stNum);

//真偽値
let boolean = true;
boolean = false;

//配列
let array = ['appel', 'banana', 'grape'];
array = [1,2,3];
array = [1, 'apple', true, array];
array = ['apple', 'banana', 'grape'];
console.log(array[0]);
//配列にデータを1つずつ入れる
array.push('peer');
console.log(array[3]);

//オブジェクト
const coffee = {
    name: 'Chocolate Mocha',
    size: 350,
    isHot: true,
    //オブジェクトの中に配列
    toppings: ['Cinnamon', 'Caramel'],
    //オブジェクトの中にオブジェクト
    nutritions: {
      carories: 430,
      sugar: 53,
    },
};


