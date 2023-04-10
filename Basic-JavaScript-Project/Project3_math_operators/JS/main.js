let m = document.getElementsByTagName("h2") //h2

function mathMe(){
    var sum = parseInt(m[0].innerHTML);//sum=3
    var subtract=parseInt(m[0].innerHTML);//subtract=2
    for(var i=1; i<m.length; i++){
        var j=parseInt(m[i].innerHTML);//j=3
        sum += j;//sum=5
        subtract -= j;//subtract=1
    }
    
    document.getElementById("sum").innerHTML=  `sum is:  +${sum}`;
    document.getElementById("subtract").innerHTML= `subtract is: ${subtract}`;
}

function mathTwo(){
    var multiply = 1;
    for (var i=0; i<m.length; i++){
        multiply *= parseInt(m[i].innerHTML);//multiply=3,,,=6
    }
    document.getElementById("multiply").innerHTML=multiply;
}

function mathThree(){
    var division =Math.floor(m[0].innerHTML/m[1].innerHTML);
    var modulus = m[0].innerHTML%m[1].innerHTML;
    document.getElementById("division").innerHTML=`The division is ${division} and the remainder is ${modulus}  `;
}

var x = [9,8,7,6]
function mathAll(){
   var xAll = x[0]+x[1]*x[2]-x[3]/x[2];
   document.getElementById("all").innerHTML = xAll;
}
 
//unary operation
var y=10;
window.alert(`this is a page for ${-y}`); 
window.alert(`THIS IS A RANDOM NUMBER between zero and fifty, ${Math.trunc(Math.random()*50)} ,SO DON'T BODER YOUR SELF`);
document.write(`this page can be used with ${--y} to ${++y}`)


