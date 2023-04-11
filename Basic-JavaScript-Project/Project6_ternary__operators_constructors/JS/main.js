function voteFunction(){
    var age= document.getElementById("age").value
    var  canVote = (age>=18)? "You are old enough" : "You are not old enough";
    document.getElementById("vote").innerHTML =`${canVote} to vote.`
}
function clearMe(){
    document.getElementById("age").value ="";
}

//key words
function clearMeOne(){
    document.getElementById("myCar").value ="";
}
function vehicle(make, model, year, color){
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Arezoo = new vehicle("Toyota", "RAV4", 2020, "gray");
var Ali = new vehicle("Toyota", "bz4x", 2023, "black");
var Parmida= new vehicle("Tesla", "model y", 2021, "white");
var Mantra = new vehicle("BMW","X4", 2022, "blue");
function carName(){
     var x = document.getElementById("myCar").value;
     if (x == "Arezoo"){
     document.getElementById("yourCar").innerHTML= `your car is a ${Arezoo.vehicle_color} ${Arezoo.vehicle_make} ${Arezoo.vehicle_model} which is made in ${Arezoo.vehicle_year}`;
     }else if(x=="Ali"){
        document.getElementById("yourCar").innerHTML= `your car is a ${Ali.vehicle_color} ${Ali.vehicle_make} ${Ali.vehicle_model} which is made in ${Ali.vehicle_year}`;
     }else if(x=="Parmida"){
        document.getElementById("yourCar").innerHTML= `your car is a ${Parmida.vehicle_color} ${Parmida.vehicle_make} ${Parmida.vehicle_model} which is made in ${Parmida.vehicle_year}`;
     }else if(x=="Mantra"){
        document.getElementById("yourCar").innerHTML= `your car is a ${Mantra.vehicle_color} ${Mantra.vehicle_make} ${Mantra.vehicle_model} which is made in ${Mantra.vehicle_year}`;
     }else{
        document.getElementById("yourCar").innerHTML= `You are not in this list`;
     }
}
/*reserved words
var true = "Are";
console.log(true);*/
function count(x){
    return(Math.trunc(x))
}
function cubeMe(y){
    var x=count(y);
    document.getElementById("here").innerHTML=x;
}

