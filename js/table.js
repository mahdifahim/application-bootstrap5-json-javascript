$(document).ready(function() {
    $('#example').DataTable();
} );
let myjsonobject ='{"name": "mahdi", "position": "System Architect","office": "Edinburgh","age": 25, "start_date": "2020/04/25"}'
let myjs= JSON.parse(myjsonobject);
console.log(myjs);
var row=1;

    var display=document.getElementById("example"),
        myname=myjs.name,
        myposition=myjs.position,
        myoffice=myjs.office,
        myage=myjs.age,
        mydata=myjs.start_date;


    
    var newrow=display.insertRow(row);
    
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);  

    cell1.innerHTML= myname;
    cell2.innerHTML=myposition;
    cell3.innerHTML=myoffice;
    cell4.innerHTML=myage;
    cell5.innerHTML=mydata;
       row++;
      var newbottun=document.getElementById("setjson");
      newbottun.onclick=function(){
       var newname=document.getElementById("inputnameset").value,
       newtex=document.getElementById("inputtextset").value;

       let newjs ={name: "mahdi", textarea : "System Architect"};
       newjs.name=newname;
       newjs.textarea=newtex;
       console.log(newjs);
       var jsonstring=JSON.stringify(newjs);
       console.log(jsonstring);
      }