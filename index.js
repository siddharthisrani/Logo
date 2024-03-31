document.getElementById("theme1").addEventListener("click",mytheme1)
document.getElementById("theme2").addEventListener("click",mytheme2)
document.getElementById("theme3").addEventListener("click",mytheme3)
document.getElementById("theme4").addEventListener("click",mytheme4)
document.getElementById("mycolor").addEventListener("change",mycolorfun)
document.getElementById("appshdw").addEventListener("click",aplyshfun)
document.getElementById("rmshdw").addEventListener("click",rmshfun)
document.getElementById("fontS").addEventListener("click",fontSfun)
document.getElementById("fontM").addEventListener("click",fontMfun)
document.getElementById("fontL").addEventListener("click",fontLfun)




function mytheme1(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Broadway";



} 
function mytheme2(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
 
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Wide Latin"
} 

function mytheme3(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
 
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Magneto"
} 

function mytheme4(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
 
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Algerian"
} 


function mycolorfun(){
    let dataobj = document.getElementById("boxData");
    let value = document.getElementById("mycolor").value
    dataobj.style.color = value;
    
}
function aplyshfun(){
    let dataobj = document.getElementById("boxData");
    dataobj.style.textShadow = "2px 5px 5px grey" ;
    
}
function rmshfun(){
    let dataobj = document.getElementById("boxData");
    dataobj.style.textShadow = "";   
}
function fontSfun(){
    let dataobj = document.getElementById("boxData");
    let value = document.getElementById("fontS").value
    dataobj.style.fontSize = "25px";
    
}
function fontMfun(){
    let dataobj = document.getElementById("boxData");
    let value = document.getElementById("fontS").value
    dataobj.style.fontSize = "50px";
    
}
function fontLfun(){
    let dataobj = document.getElementById("boxData");
    let value = document.getElementById("fontS").value
    dataobj.style.fontSize = "100px";
    
}
