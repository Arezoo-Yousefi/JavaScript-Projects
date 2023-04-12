function call_loop(){
    let x= 0;
    let digit="";
    while(x<=20){
        digit += x+"</br>";
        document.getElementById("loop").innerHTML= digit;
        x++;
    }
}

function countLength(){
    let x= (document.getElementById("length").value);
    console.log(typeof(x));
    console.log(x.length)
    document.getElementById("here").innerHTML=`${x} has ${x.length} letters.`;
}
let x=[];
function countThem(){
    
    x.push(document.getElementById("classMates").value);
    console.log(x);
}
function counting(){
    let myName="";
    for(let i=0; i<x.length; i++){
        if(i===2){continue;}
        myName += x[i]+"; ";
        
        
    }
    document.getElementById("now").innerHTML=myName;
    document.getElementById("complete").innerHTML= `There are ${x.length} students in your class.` 
}
function constantFunction(){
    const schoolName = {id: 1, name:"Hampton", rank: 8.1, address:"Coquitlam"};
    schoolName.name=document.getElementById("yourSchool").value;
    document.getElementById("constant").innerHTML=`${schoolName.name} which is in ${schoolName.address} has the ranking of ${schoolName.rank}.`
}

function man(){
    document.getElementById("man").innerHTML= hello();
    
}
function hello(){
    return "hello!:)";
}
function objectHa(){
    let x = {
        name: "Mercedes",
        type: "x50",
        year: 1930,
        discription: function (){
            return `I like to drive a ${this.name} which is made in ${this.year}`
        }
    }
    document.getElementById("objectN").innerHTML=x.discription();
}
function typing(event, hassan){
    let x= hassan.value;
    if(event.which==13){
        document.getElementById("id3").focus();
    }
    document.getElementById("typing").innerHTML= x;
    
}