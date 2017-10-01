// task 1
function check(data, message) {
  if(data === "" || data == null){
    data = prompt("Stop! pleace enter data" , message) 
  }
  return data;
}
var message = "Replay";

var person = prompt("Enter your name?" , "Ihor Medvid");
var person = check(person , message);

var time = prompt("When?", "at 12:00");
var time = check(time, message);
var place = prompt("Where?", "in park");
var place = check(place, message);

var event = prompt("Event?","New year!");
var event = check(place,message);

var day = "Today";
var taskresult1 = day + " " + person + " " + time + " " + place + " " + event ;
alert(taskresult1);

function check(data, message) {
  if(data === "" || data == null){
    data = prompt("Stop! pleace enter data" , message) 
  }
  return data;
}

var ResultTask1 = document.getElementById('task1');
output =  taskresult1;
ResultTask1.innerHTML = output;

console.log(taskresult1);

//task 2
const e = 31.1;
const d = 25.83;
const e_d = 1.2;


var euro_grn = "Evro(s) to grn(s)";
var dollar_grn = "Dollar(s) to grn(s)";
var euro_dollar = "Evro(s) to dollar(s)";

var InputE_G = prompt(euro_grn, "0");
var InputE_G = check(InputE_G, message);

var ResultE_G = InputE_G * e;
alert(euro_grn + " " +  ResultE_G);

var InputD_G = prompt(dollar_grn, "0");
var InputD_G = check(InputD_G, message);
var ResultD_G = InputE_G * d;
alert(dollar_grn + " " +  ResultD_G);


taskresult2 = InputE_G + " euros are equal " + ResultE_G + " grns, " + InputD_G + " dollars are equal " + ResultD_G + ", one euro is equal " + e_d + " dollars.";
alert(taskresult2);
var ResultTask2 = document.getElementById('task2');
output2 =  taskresult2;
ResultTask2.innerHTML = output2;
