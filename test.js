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