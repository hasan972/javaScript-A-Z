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

//using promise function for task 1-4
const taskOne = () => {
  return new Promise((resolve, reject) =>{
    resolve("task-1 is compleate");
  });
};
const taskTwo = () =>{
  return new Promise((resolve, reject) =>{
    //for API
    setTimeout(() =>{
      resolve("task-2 is compleate");
    }, 2000);
  });
};
const taskThree = () =>{
  return new Promise((resolve, reject) =>{
    reject("task-3 is compleate");
  });
};
//task fore is not working because we  using reject parameter
const taskFore = () =>{
  return new Promise((resolve, reject)=>{
    resolve("task-4 is compleate");
  });
};

// taskOne()
// //for resolve
// .then((res) => console.log(res))
// .then(taskTwo)
// .then((res) => console.log(res))
// .then(taskThree)
// .then((res) => console.log(res))
// .then(taskFore)
// .then((res) => console.log(res))
// //for reject
// .catch((err) => console.log(err));


//Another way to print the taskOne
//async ans await
//erroe handeling usingtry catch
const callAllTask = async () =>{
  try{
  const t1 = await taskOne();
  console.log(t1);
  const t2 = await taskTwo();
  console.log(t2);
  const t3 = await taskThree();
  console.log(t3);
  const t4 = await taskFore();
  console.log(t4);
}catch (error){
  console.log(error);
 }
};
callAllTask();
