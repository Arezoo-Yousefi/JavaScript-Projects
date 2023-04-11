var myName = "Arezoo";
function counting(){
    var x = 43;
    console.log(`my name is ${myName} and I am ${x} years old`);
}
counting();

function getDateMe(){
    var x=new Date().getHours()
    if(x>20){
        document.getElementById("newDate").innerHTML=`it is ${x},time to sleep`
    }else{
        document.getElementById("newDate").innerHTML= x;
    }
}
function clearMe(){
    document.getElementById("heightMe").value="";
}
function myHeight(){
     var x = document.getElementById("heightMe").value;
     if(x>3){
        document.getElementById("here").innerHTML= `You are tall enough to stay without carsit`;
     }else if(x==3){
        document.getElementById("here").innerHTML=`insert your inches`;
     }else{
        console.log(x);
        document.getElementById("here").innerHTML=`You are not tall enough to stay without carsit`;
     }
}