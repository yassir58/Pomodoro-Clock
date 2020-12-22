


/// defin section

const session=document.querySelector(".session-card");
const progressplace=document.querySelector(".progress");
const progress=document.querySelector(".progress-bar");
const start=document.getElementById("start");
const first=document.getElementById("15min");
const second=document.getElementById("30min");
const third=document.getElementById("45min");
const costumeTime=document.getElementById("costumeTime");
const costume_btn=document.querySelector(".costume-btn");
const checkbox_panel=document.querySelector(".checkbox-panel");
const pause_btn=document.querySelector(".pause-btn");
const end_btn=document.querySelector(".end");
//// set the value of the session



var sessionTime=25;
var interval;
var url="Alarm-ringtone.mp3";
var audioObj = new Audio(url);



/////////////////////////////
///function handle the  start of the session 
function handleClick(){

    if(first.checked == true){
        sessionTime=15;
    }else if (second.checked == true){
        sessionTime=30;
    }else if (third.checked == true){
        sessionTime=45;
    }else {
        sessionTime=costumeTime.value;
    }
    setTimeout(()=>{
        console.log("your session is end");
        r.innerHTML="<p>Your session is end</p>";
        pause_btn.style.display="flex";
        end_btn.style.right="-220px";
        audioObj.play();
        setTimeout(()=>{
            audioObj.pause();
        },10000);
        r.style.fontSize="25px";
        r.style.color="#00587a";
        progress.style.display="none";
        progress.style.display="none";
        clearInterval(interval);
    },sessionTime * 60000 );
    var time=sessionTime*60,r=document.querySelector(".time"),tmp=time;
   
r.style.fontSize='5rem';
     interval=setInterval(function(){
      let c=tmp--,m=(c/60)>>0,s=(c-m*60)+'';
        r.innerHTML='<h1> 00 : '+m+' : '+(s.length>1?'':'0')+s
        tmp!=0||(tmp=time) + '</h1>';
    },1000);
    
 session.style.display="grid";
 checkbox_panel.style.display="none";
 var i=0;
 if(i==0)
 i=1;
let width=300;
setInterval(()=>{
    if(width <=300){
        width=width- width / sessionTime;
        progress.style.width = width +"px";
    }else {
        clearINterval(interval);
        i=0;
    }
},60000);




   }
   function end(){
session.style.display="none";
audioObj.stop();
clearInterval(interval);
   }

  
   
  costume_btn.onclick=()=>{
    checkbox_panel.style.display="flex";
  }
  
    
  
  const remove=document.querySelector(".remove");

  remove.onclick=(event)=>{
    event.preventDefault()
    checkbox_panel.style.display="none" ;
   
    
  }
  const bar=document.getElementById("bar");
  const nav_bar=document.querySelector(".nav-links");

  bar.onclick=function(){
if(nav_bar.style.right <= "-250px"){
    nav_bar.style.right ="0";
}else {
    nav_bar.style.right="-250px";
}
  }
  const test=document.getElementById("test");
 pause_btn.onclick=function (){
     audioObj.pause();
 }