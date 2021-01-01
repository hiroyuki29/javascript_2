 let get_word = ""; //入力値の一時保管
 let word_number = ""; //入力中の数値（文字列）
 let number = 0; //入力中の数値（数値）
 let memo_number = 0; //計算値の保管
 let memo_operator = '+'; //演算子の保管
 let window_show = ""; //表示値
 let sub_memo_number = 0; //商・除の一時保管

//数字の入力
 $(document).ready(function() {
  $(".num").click(function() {
   get_word = $(this).text();
   window_show += get_word;
   $("#window").text(window_show);
   word_number += get_word;
   get_word = "";
  });

//演算子の入力
  $(".operator").click(function() {
   get_word = $(this).text();
   number = Number(word_number);
   sub_memo_number = calculate(sub_memo_number, number, memo_operator);
   if (get_word === "+" || get_word === "-" || get_word === "=") {
    memo_number += sub_memo_number;
    sub_memo_number = 0;
   }
   if (get_word === "=") {
    memo_operator = "+";
    word_number = memo_number;
    window_show = memo_number;
    memo_number = 0;
   }
   else {
    memo_operator = get_word;
    window_show += get_word;
    word_number = "";
   }
   $("#window").text(window_show);
   get_word = "";
  });

//ACの入力
  $(".ac").click(function() {
   number = 0;
   word_number = "";
   memo_number = 0;
   memo_operator = "+";
   window_show = "";
   $("#window").text(memo_number);
  });
 });
 
 //四則演算
 function calculate(memo, current, operator) {
  switch (operator) {
   case '+':
    return memo + current;
    break;
   case '-':
    return memo - current;
    break;
   case '*':
    return memo * current;
    break;
   case '/':
    return memo / current;
    break;
   default:
    return 0;
  }
 }
 