/*
var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");//all work done this methode

ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,280);


ctx.fillStyle = "green";
ctx.fillRect(12,12,376,276); //x,y,width,height

var centerx = c.width / 2;
var centery = c.height / 2;

ctx.beginPath();
ctx.arc(centerx,centery,60,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
*/
/*
//forEach
 var number = [10,20,30,40,50];

  number.forEach(function(x){
  console.log(x)
})
// one array to go another array and the answer is squere
 var number1 = [10,20,30,40,50,100];
 var squreNumber1 = [];
 number1.forEach(function(x){
   squreNumber1.push(x*x);
 })
 console.log(squreNumber1);

 //mapfunction
 var array = [2,3,4,10,20,30];
 var squreArray = array.map(function(x){
   return x*x;
 })
 //for filter
 var filterArray = array.filter(function(x){
   return x>10; //hare is tha condition
 })
 console.log("Main array number: "+array);
 console.log("SqureArray number: "+squreArray);
 console.log("Filter the array: "+filterArray);
*/

/*
  //Arrow mapfunction
  function massage1(){
    return "Hi";
  }
  const massage = () => "hi me Rakibul Hasan";
  console.log(massage1());
  console.log(massage());
  //add using the arrow functuion
//Traditional way
function add(num1,num2){
  sum = num1+num2;
}
add(10,10)
console.log(sum);

//arraw function way
const add1 = (num1,num2) => num1 + num2;
console.log(add1(10,11));
*/
const add1 = (num1,num2) => num1 + num2;
console.log(add1(10,11));
