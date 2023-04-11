function clearMe(){
    document.getElementById("myName").value="";
}
var partOne ="Hi ";
var partTwo = "Welcome to my website!"
function pressMe(){
     var xName=document.getElementById("myName").value;
     document.getElementById("greething").innerHTML=partOne.concat(xName,", ",partTwo);
}
var txt="banana, apple, kiwi, cucumber";
document.write(txt.slice(-txt.length, 6));
document.getElementById("banana").innerHTML=txt.toUpperCase();
console.log(txt.search("kiwi"));
var numOne= 14.564563423476875;
console.log(numOne.toPrecision(4));
console.log(numOne.toFixed(5));
console.log(numOne.valueOf());
var num=14;
document.getElementById("age").innerHTML=("You are ".concat(num.toString()," Years old!")).toLowerCase();

