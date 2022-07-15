let value1='';
let n=0;
function list(num1){
    if(value1.length>9){
        alert("Maximum 10 digits allowed");
    }
    else{
        n=n+1;
        value1=value1+num1;
        document.querySelector(".dis").innerHTML=value1;}
}

document.querySelector(".one").addEventListener("click",()=>{
    list(1);
})
document.querySelector(".two").addEventListener("click",()=>{
    list(2);
})
document.querySelector(".three").addEventListener("click",()=>{
    list(3);
})
document.querySelector(".four").addEventListener("click",()=>{
    list(4);
})
document.querySelector(".five").addEventListener("click",()=>{
    list(5);
})
document.querySelector(".six").addEventListener("click",()=>{
    list(6);
})

document.querySelector(".seven").addEventListener("click",()=>{
    list(7);
})
document.querySelector(".eight").addEventListener("click",()=>{
    list(8);
})
document.querySelector(".nine").addEventListener("click",()=>{
    list(9);
})
document.querySelector(".mul").addEventListener("click",()=>{
    list("*");
})
document.querySelector(".zero").addEventListener("click",()=>{
    list(0);
})
document.querySelector(".has").addEventListener("click",()=>{
    list("#");
})
document.querySelector(".back").addEventListener("click",()=>{
    if(value1.length<=0){
        alert("No digits left");
    }
    else{
        n=n-1;
        value1=value1.substr(0,value1.length-1);
        document.querySelector(".dis").innerHTML=value1;
    }
})
