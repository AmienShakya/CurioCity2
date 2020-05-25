setInterval(function()
{
const clock = document.querySelector(".hour")


var a
var am
var bm
var cm
  let time= new Date();
  let hr = time.getHours();
  let min=time.getMinutes();
  let sec=time.getSeconds();




if(hr>12){
hr=hr-12;
a="PM"
}
else{
  hr=hr;
a="AM"
}
if(hr==24){
  hr=hr-12;
}

if(min<10){
am="0";
}
else{
  am="";
}

if(hr<10){
bm="0";
}
else{
  bm="";
}

if(sec<10){
cm="0";
}
else{
  cm="";
}

    clock.textContent = "Nep :"+ " "+  bm + hr + ":" + am + min + ":" +cm+ sec + " " + a ;
  });
