document.write(typeof("Arezoo"));
var x = "arezoo";
var y = 43;
document.write(x+y);

//display NaN;
function nanFuncOne(){
    var x = 0;
    var y = 0;
    return x/y;
}
 function nanFunc(){
    document.getElementById("nan").innerHTML= nanFuncOne();
    document.getElementById("isNan").innerHTML=isNaN("arezoo");
    document.getElementById("infinityNum").innerHTML=-5222233333333333333399999999999999999999999999999999999999999999999999999999999999999999992888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998888888888888888888888;
 }
 function isBooleanOne(){
    return((23>22) && (24<24));
 }
 function isBoolean(){
    document.getElementById("booleanReturn").innerHTML=isBooleanOne();
 }
 console.log("true");
 console.log((2>4));
 console.log("5"==10-5);
 console.log("5"===10-5);
 console.log(!(5>7));