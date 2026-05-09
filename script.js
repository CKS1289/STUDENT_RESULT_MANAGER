function showResult(){

 let name = document.getElementById("name").value;
 let marks = document.getElementById("marks").value;

 if(marks >= 40){
   document.getElementById("result").innerHTML =
   name + " is PASS";
 }
 else{
   document.getElementById("result").innerHTML =
   name + " is FAIL";
 }

}
