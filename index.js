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
/*
var heading3 = document.createElement("h2");//create element
var text = document.createTextNode("This is heading 3");
heading3.appendChild(text);
//ad the text to html code
var myDiv = document.getElementById("my");
myDiv.appendChild(heading3);

//Remove h2=Good Bye TagName
var heading2 = document.getElementsByTagName("h2")[2];
myDiv.removeChild(heading2);
//add the element first
var heading0 = document.createElement("h2");
var text0 = document.createTextNode("Add first heading 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h2")[1];
myDiv.insertBefore(heading0, heading1 );
*/
function addStyle(){
  var myVar = document.querySelector("#paraid");
  // myVar.style.color ="red";
  // myVar.style.fontSize="3rem";
  // myVar.style.fontWeight = "bold";
  // myVar.style.fontStyle= "italic";
  // myVar.innerHTML="Hi bro now i am change and my colour will be red thx java my script";
  myVar.classList.add("para-style");
  myVar.innerHTML="Hi bro now i am change and my colour will be red thx java my script";
}
function removeStyle(){
  var myVar = document.querySelector("#paraid");
  myVar.remove("para-style");
}
/* Add style and remove style sort code
var myVar = document.querySelector("#paraid");
function addStyle(){
  myVar.classList.add("para-style");
  myVar.innerHTML="Hi bro now i am change and my colour will be red thx java my script";
}
function removeStyle(){
  myVar.remove("para-style");
}
*/
