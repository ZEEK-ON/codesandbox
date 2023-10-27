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
const name = "イワシ";
const age = 28;
// 「私の名前はイワシです。年齢は24歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
// shift+@マークのバッククォートで囲む
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1() {
    
}