/**
 * const,let,等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数を再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "イワシ",
//   age: 24,
// };
// val4.name = "iws";
// val4.addres = "wakayama";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// 文字列の中にJavascriptの変数を便利に埋め込めるようになった
// const name = "イワシ";
// const age = 28;
// // 「私の名前はイワシです。年齢は24歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// // shift+@マークのバッククォートで囲む
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // カッコを省略することも可能
// // returnを省略することも可能
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// 設定項目や変数名長い場合に便利
// const myProfile = {
//   name: "イワシ",
//   age: "24",
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 処理の最初でプロパティを抜き出す。
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["イワシ", 24];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// 初期値=デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// // sayHello("イワシ");
// sayHello();

/**
 * スプレッド構文 これのこと→ ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // // 配列の中身を順番に処理して表示
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// // スプレッド構文を用いて残り全部受け取る
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// 参照渡し？に影響するので覚えると不具合の元を減らせる。
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// 従来のfor文をほぼ使わなくなったらしい
// const nameArr = ["田中", "山田", "イワシ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// returnされた結果に基づいて新しい配列を処理する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// 単純に配列をループする
// 用途に合わせて引数（indexとかがそう）を増やす
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// ある条件に一致したものだけ返却して新しい配列を生成
// const numArr = [1, 2, 3, 4, 5];
// // 奇数だけ取り出す
// const newNumArr = numArr.filter((num) => {
//   return num % 2 == 1;
//   // return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNumArr = nameArr.map((name) => {
//   if (name === "イワシ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// 使いすぎると可読性悪くなる
// if文がif elseと書かなくて良くなる
// ある条件 ？ 条件がtrueの時：条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// 金額表示に使えるやつ
// console.log(num.toLocaleString());

// 変数の型がなんなのか判定
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// };
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう
 *  &&（かつ） ||（または）ではない
 * ||（パイプライン）
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1か2はtrueになります");
// }

// || は左側がfalseなら右側を返す
// || は左側がtrueなら左側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
