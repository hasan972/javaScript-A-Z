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

 taskOne(() => {
   taskTwo(() => {
     taskThree(() => {
       taskFore(() => {
         taskFive();
       })
     });
   });
 });
