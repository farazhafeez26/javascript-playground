//javascript for loop 
var cars = ["BMW", "volvo", "saab", "ford"];
var i, len, text;
for (i = 1, len = cars.length, text = " "; i < len; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
//end of script

//javascript for/in loop 
var txt = "";
var person = { fname: "john", lname: "Doe", age: 25 };
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo1").innerHTML = txt;
//end of script

//javascript while loop
var nos = ["1", "2", "3", "4", "5", "6"];
xxx = "";
lenx = nos.length;
var j;
for (j = 0; j < lenx; j++) {
    xxx += "the lucky number is" + " " + nos[j] + "<br/>";
}
document.getElementById("demo2").innerHTML = xxx;
