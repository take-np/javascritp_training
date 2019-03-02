// JavaScript training

a = 3;
console.log(a);

// alert(a);

if (a === 3){
    console.log("a is " + a);
}else{
    console.log("a is not " + a);
}

if (a !== 5){
    console.log("a is not 5");
}

a = 18;
if ( a >= 20){
    console.log("aは20以上です");
}else if(a >= 15){
    console.log("aは15以上です");
}else if(a >= 10){
    console.log("aは10以上です");
}else if(a >= 5){
    console.log("a は 5以上です");    
}

// 関数の定義
// ちなみに、関数定義はどこに書いておいても構いません。関数を使うより後でも構いません。例えば、上のプログラムは次のようにしても同じように動きます。
function aaa(){
    console.log("aaaa_method");
}
aaa();

bbb();
function bbb(){
    console.log("bbb_method");
}

// 引数
function test_argument(abc){
    console.log("引数は" + abc + "です");

}
test_argument("歴史");
test_argument(123);
test_argument("abc");

function test_two_argument(abc, def){
    console.log("引数は" + abc + "と" + def + "です");

}
test_two_argument("aiu", "eo");



console.log("グローバル変数と、ローカル変数の区別")
console.log("----------------------------------------")
function aaa(){
    a = 3;
    console.log(a);
}
a = 5;
console.log(a);
aaa();
console.log(a);

function aaa(){
    var a = 3;
    console.log(a);
}
a = 5;
console.log(a);
aaa();
console.log(a);

// 戻り値
console.log("----------------------------------------");
console.log("戻り値 -- return")

var a = parseInt("12");
console.log(a);

function sum(a,b){
    return a + b;
}

console.log(sum(19,22));
var sum = sum(10, 9);
console.log(sum);

// またreturnは処理を停止できる
function return_stop(){
    return;
    console.log("next");
}
stop = typeof(return_stop());
console.log(stop);



// イベント
// JavaScriptでのイベントとは、「何かが起こったときにJavaScriptが動くこと」
console.log("イベント");
console.log("----------------------------------------");

// ================================
// <!doctype html>
// <html>
//   <head>
//     <title>test</title>
//     <style>
//       p {
//         width: 200px;
//         height: 200px;
//         background-color: #ffff00;
//       }
//     </style>
//   </head>
//   <body>
//     <p onclick="alert('click');">test</p>
//   </body>
// </html>
// ================================

// // ================================
// <!doctype html>
// <html>
//   <head>
//     <title>test</title>
//   </head>
//   <body>
//     <script type="text/javascript">
// function aaa(){
//     alert('click');
// }
//     </script>
//     <form action="#">
//       <p><input type="button" value="click!" onclick="aaa();"></p>
//     </form>
//   </body>
// </html>
// // ================================



// 繰り返し

var i = 0;
while(i<5){
    console.log(i);
    i++;
}


console.log("インクリメント、デクリメント");
// インクリメント、デクリメント
// ================================
// オペランドが１つしかない演算子を「単行演算子」
// ２つある演算子は「二項演算子」
// インクリメント演算子 -> 変数に1を足す
// i++; -> 返す値 = 足す前の値
// i+=1;

// ++i; -> 返す値 = 足した後の値

// デクリメント演算子 -> 変数から1を引く
i = 1;
y = 1;
console.log(i++);
console.log(++y);
console.log(i);

console.log("break, contiue");
// break, contiue
// ================================
// continue -> { ~ }の実行を今回は終了する
// break -> ループを強制的に終了する。breakはループ全体（下記のwhile全体）を終了する
var i = 0;
while(true){
    i++;
    if(i < 2){
        continue;
    }
    console.log(i);
    if(i > 5){
        break;
    }
}
console.log("do while");
// do while
var i = 0;
do{
    console.log(i);
    i++;
}while(i < 3);

// フォーム操作         
// [test.html]を参照

console.log("配列");
console.log("================================");
// 配列
var aa = new Array("aaa","bbb","ccc");
// 厳密には、関数呼び出しのさいの、「引数」であるために、"," で区切っている
console.log(aa[0]);
console.log(aa[1]);
console.log(aa[2]);
// aa[2]のような数字のことを「添字」という

aa[0] = "d"
console.log(aa[0]);

//配列リテラル
bb = ["aa","bb","cc","dd"];
console.log(bb.length);

// 配列の利用
console.log("配列の利用");
console.log("================================");
var alphabet = ["a","b","c","d","e","f"];
var i = 0;
while(i < alphabet.length){
    console.log(alphabet[i]);
    i++;
}

// for の利用
for (var i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
}