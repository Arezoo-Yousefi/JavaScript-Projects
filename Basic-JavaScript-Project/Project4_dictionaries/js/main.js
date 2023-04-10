var car={
    make: "Tyota",
    model: "RAV 4",
    year: 2020,
    VinNumber: 57883439,
    typeOfEnergy: "hybrid",
}
function myDictionary(){
    delete car.make;//car.mske is deleted to try word operator;
   document.getElementById("dic").innerHTML= car.make; 
}