//call back haigher order function
/*
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
 */

 /*
//create promise and promise 3 type the number one is pending and number two is resolve and the last is rejact
 const promise1 = new Promise((resolve, reject) =>{
   let compleatedPromise = false;
   if (compleatedPromise){
     resolve("completed promise");
   }else{
     reject("not compleated promise");
   }
 });
//true ar jonno then use korbo and false ar jonno catch use korbo promise function working eather then or catch
  promise1
  // .then(res => {
  //   console.log(res);
  // });
  .catch(rej =>{
    console.log(rej);
  });
*/
