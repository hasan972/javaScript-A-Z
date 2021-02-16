//call back haigher order function

 const taskOne = () =>{
   console.log("Task-1");
 };
 const taskTwo =() =>{
   //using anonimus function
   setTimeout(() =>{
     console.log("Task-2. Data Loading");
   }, 0);
 };
 const taskThree =() =>{
   console.log("Task-3");
 };
 const taskFore =() =>{
   console.log("Task-4");
 };
 const taskFive =() =>{
   console.log("Task-5");
 }
 taskOne();
 taskTwo();
 taskThree();
 taskFore();
 taskFive();
