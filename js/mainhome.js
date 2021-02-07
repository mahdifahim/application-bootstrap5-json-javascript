/*start input info*/
var mybutton = document.getElementById( "inputinfo");

mybutton.onclick = function(){
    'use srtict'
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img =document.getElementById("inputimage" );
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });    
    var myinputname=document.getElementById("inputname" ).value,
     myinputtext=document.getElementById("inputtext").value,
     myinputemail=document.getElementById("inputemail").value,
     myinputphon=document.getElementById("inputphon").value,
    mycard=document.getElementById('card')  ,
     mysetname=document.getElementById("settname"),
     mysettex=document.getElementById("settext"),
     mysetemail=document.getElementById("setemail"),
     mysetphon=document.getElementById("setphon"),
     mysetimage=document.getElementById("inputimage");
     if(!myinputname||!myinputtext||!myinputemail||!myinputphon){
        alert("please fill all the box");
        return;
    }
     mysetname.innerHTML=myinputname;
     mysettex.innerHTML=myinputtext;
     mysetemail.innerHTML=myinputemail;
     mysetphon.innerHTML=myinputphon;
     mycard.style.display='block';
};

/* end input info*/
/* Start display menu*/
var  newentering = document.getElementById("entering");
newentering.onclick= function () {
    var x = document.getElementById("inputentering");
    y = document.getElementById("getinfo");
    z = document.getElementById("setinfo");
    if (x.style.display === "none" || x.style.display==="") {
      y.style.display="none"
      z.style.display="none"
      x.style.display = "block";
    } else {
      x.style.display = "none";     
    }
  }
  var  newentering = document.getElementById("buttongetinfo");
newentering.onclick= function () {
    var x = document.getElementById("getinfo");
    y = document.getElementById("inputentering");
    z = document.getElementById("setinfo");
    if (x.style.display === "none" || x.style.display==="") {
      y.style.display="none"
      z.style.display="none"
      x.style.display = "block";
    } else {
      x.style.display = "none";     
    }
  }
  var  newentering = document.getElementById("buttonsetinfo");
  newentering.onclick= function () {
      var x = document.getElementById("setinfo");
      y = document.getElementById("inputentering");
      z = document.getElementById("getinfo");
      if (x.style.display === "none" || x.style.display==="") {
        y.style.display="none"
        z.style.display="none"
        x.style.display = "block";
      } else {
        x.style.display = "none";     
      }
    }