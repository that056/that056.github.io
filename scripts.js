const search = document.getElementById("btngroup");
const txt = document.getElementById("txt");

search.addEventListener('click',function(){
txt.style.display='block';
});

function displayTime (){
    const displayElement1 = document.getElementById("datedisplay1");
const target = new Date('November 31, 2023 20:00:00').getTime();
var currentDateTime = new Date().getTime();
const diff = target - currentDateTime;
var day,hou,min,sec;
if(diff>0){
  day = Math.floor((diff/(1000*60*60*24)));
     hou = Math.floor((diff%(1000*60*60*24)/(1000*60*60)));
    min = Math.floor((diff%(1000*60*60)/(1000*60)));
    sec = Math.floor((diff%(1000*60)/1000));
}

const format1 = day+" : "+hou+" : "+min+" : "+sec;
displayElement1.innerHTML =format1;
const displayElement = document.getElementById("datedisplay");
var currentDate = new Date();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var hours = currentDate.getHours();
const format = hours+': '+minutes+' : '+seconds;
displayElement.innerHTML =format;

}
window.onload =function(){
displayTime();
setInterval(displayTime,1000);

};
