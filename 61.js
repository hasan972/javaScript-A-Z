//call back haigher order function

 const taskOne = (callback) =>{
   console.log("Task-1");
   callback();
 };
 const taskTwo =(callback) =>{
   //using anonimus function
   setTimeout(() =>{
     console.log("Task-2. Data Loading..");
     callback();
   }, 4000);

 };
 const taskThree =(callback) =>{
   console.log("Task-3");
   callback();
 };
 const taskFore =(callback) =>{
   console.log("Task-4");
   callback();
 };
 const taskFive =() =>{
   console.log("Task-5");
 };

 taskOne(function f1(){
   taskTwo(function f2(){
     taskThree(function f3(){
       taskFore(function f4(){
         taskFive();
       })
     });
   });
 });
