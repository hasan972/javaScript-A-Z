//304 number to 308
// function mm1(){
//   alert("Hi Boss");
// }
//
// function para(){
//   alert("Hi i am a paragrap");
// }
//querySelector

// function para(){
// var myVar =  document.querySelector("#paraid");
//   myVar.innerHTML ="You have click the button";
// }
//Image change functioin 313
// function pic1(){
//   var myVariable = document.querySelector("#myImage");
//   myVariable.src = "img/image1.jpeg";
// }
// function pic2(){
//   var myVariable = document.querySelector("#myImage");
//   myVariable.src = "img/image2.jpeg";
// }


//create a html tag using javascript
var heading3 = document.createElement("h2");//create element
var text = document.createTextNode("This is heading3");
heading3.appendChild(text);
//ad the text to html code
var myDiv = document.getElementById("my");
myDiv.appendChild(heading3);


//Remove h2=Good Bye TagName
var heading2 = document.getElementsByTagName("h2")[1];
myDiv.removeChild(heading2);
