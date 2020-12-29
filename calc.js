 let number = 0;
 let memo_number = null;
 let memo_operator = null;
 $(document).ready(function() {
   $(".no1").click(function() {
     number = number + "1";
     $("#window").text(Number(number));
   });
   $(".no2").click(function() {
     number = number + "2";
     $("#window").text(Number(number));
   });
   $(".no3").click(function() {
     number = number + "3";
     $("#window").text(Number(number));
   });
   $(".no4").click(function() {
     number = number + "4";
     $("#window").text(Number(number));
   });
   $(".no5").click(function() {
     number = number + "5";
     $("#window").text(Number(number));
   });
   $(".no6").click(function() {
     number = number + "6";
     $("#window").text(Number(number));
   });
   $(".no7").click(function() {
     number = number + "7";
     $("#window").text(Number(number));
   });
   $(".no8").click(function() {
     number = number + "8";
     $("#window").text(Number(number));
   });
   $(".no9").click(function() {
     number = number + "9";
     $("#window").text(Number(number));
   });
   $(".no0").click(function() {
     number = number + "0";
     $("#window").text(Number(number));
   });
   $(".no00").click(function() {
     number = number + "00";
     $("#window").text(Number(number));
   });
   $(".point").click(function() {
     number = Number(number) + ".";
     $("#window").text(number);
   });


   $(".plus").click(function() {
     switch (memo_operator) {
       case '+':
         memo_number += Number(number);
         break;
       case '-':
         memo_number -= Number(number);
         break;
       case '*':
         memo_number *= Number(number);
         break;
       case '/':
         memo_number /= Number(number);
         break;
       case '=':
         memo_numer = Number(memo_number);
         break

       default:
         memo_number = Number(number);
         break;
     }
     memo_operator = "+";
     number = 0;
     $("#window").text(memo_number);
   });


   $(".minus").click(function() {
     switch (memo_operator) {
       case '+':
         memo_number += Number(number);
         break;
       case '-':
         memo_number -= Number(number);
         break;
       case '*':
         memo_number *= Number(number);
         break;
       case '/':
         memo_number /= Number(number);
         break;
       case '=':
         memo_numer = Number(memo_number);
         break

       default:
         memo_number = Number(number);
         break;
     }
     memo_operator = "-";
     number = 0;
     $("#window").text(memo_number);
   });


   $(".product").click(function() {
     switch (memo_operator) {
       case '+':
         memo_number += Number(number);
         break;
       case '-':
         memo_number -= Number(number);
         break;
       case '*':
         memo_number *= Number(number);
         break;
       case '/':
         memo_number /= Number(number);
         break;
       case '=':
         memo_numer = Number(memo_number);
         break
       default:
         memo_number = Number(number);
         break;
     }
     memo_operator = "*";
     number = 0;
     $("#window").text(memo_number);
   });


   $(".slash").click(function() {
     switch (memo_operator) {
       case '+':
         memo_number += Number(number);
         break;
       case '-':
         memo_number -= Number(number);
         break;
       case '*':
         memo_number *= Number(number);
         break;
       case '/':
         memo_number /= Number(number);
         break;
       case '=':
         memo_numer = Number(memo_number);
         break

       default:
         memo_number = Number(number);
         break;
     }
     memo_operator = "/";
     number = 0;
     $("#window").text(memo_number);
   });


   $(".equal").click(function() {
     switch (memo_operator) {
       case '+':
         memo_number += Number(number);
         break;
       case '-':
         memo_number -= Number(number);
         break;
       case '*':
         memo_number *= Number(number);
         break;
       case '/':
         memo_number /= Number(number);
         break;

       default:
         memo_number = Number(memo_number);
         break;
     }
     memo_operator = "="
     number = 0;
     $("#window").text(memo_number);
   });

   $(".ac").click(function() {
     number = 0;
     memo_number = null;
     memo_operator = null;
     $("#window").text(memo_number);

   });



 });
 